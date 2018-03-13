/*tslint:disable*/
/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	ViewChild,
	ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';
import { ThumbnailBlockImageComponent } from '@mam/components';
import { CTAService } from '@mam/services';

/**
 * PAGE => Portafolio
 */
@Component({
	selector: 'app-portafolio-page',
	templateUrl: './portafolio.page.html',
	styleUrls: ['./portafolio.page.scss']
})
export class PortafolioPage implements OnInit {
	@ViewChild('renderImages', {read:ViewContainerRef}) private renderImages:ViewContainerRef;
	public images:Observable<ImageResponse[]>;
	public titulo:string = "Sigue estas y otras historias en instagram";

	constructor(
		private api:ImageApi, 
		private resolver:ComponentFactoryResolver,
		private changeDetector:ChangeDetectorRef) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}


	/**
	 * Actions
	 */
	private async retrieve():Promise<void>{
		this.render( await this.api.getHighlightImages().toPromise() );
	}

	private render(images:ImageResponse[]):void{
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(ThumbnailBlockImageComponent);
		let reference = this.renderImages.createComponent(factory);
		let component = (<ThumbnailBlockImageComponent>reference.instance);

		//-- Setting component params
		component.images = images;

		//-- Detect changes
		this.changeDetector.detectChanges();
	}

}
/*tslint:disable*/
/**
 * Global components
 */
import { 
	Component, 
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';
import { BannerInstagramComponent } from '@mam/components';


@Component({
	selector: 'mam-instance-banner-instagram',
	template: `<div #render></div>`
})
export class InstanceBannerInstagramComponent implements OnInit {
	@ViewChild('render', {read:ViewContainerRef}) private render:ViewContainerRef;
	public instagram:Observable<ImageResponse[]>;
	public titulo:string = "Sigue estas y otras historias en instagram";

	constructor(private api:ImageApi, private resolver:ComponentFactoryResolver) { }

	/**
	 * Events
	 */
	async ngOnInit() {
		await this.retrieve();
	}


	/**
	 * Actions
	 */
	private async retrieve(): Promise<void>{
		let instagramImages = await this.api.getInstagramImages_();
		this.renderComponent(this.titulo, instagramImages);
	}

	private renderComponent(title:string, instagramImages:ImageResponse[]):void{
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(BannerInstagramComponent);
		let reference = this.render.createComponent(factory);
		let component = (<BannerInstagramComponent>reference.instance);

		//-- Setting component params
		component.titulo = title;
		component.instagram = instagramImages;
	}
}

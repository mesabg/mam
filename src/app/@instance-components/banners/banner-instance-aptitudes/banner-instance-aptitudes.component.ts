/*tslint:disable*/ 
import {
	Component,
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactoryResolver,
	NgZone,
	ChangeDetectorRef } from '@angular/core';
import { MAMApi } from '@mam/api';
import { Color } from 'app/#enums/color.enum';
import { Aptitud } from 'app/#interfaces/aptitud.interface';
import { Observable } from 'rxjs/Observable';
import { BannerCarouselComponent } from '@mam/components';

@Component({
	selector: 'mam-banner-instance-aptitudes',
	template: `<div #render></div>`
})
export class BannerInstanceAptitudesComponent implements OnInit {
	public color: Color = Color.WHITE;
	public title: string = "Aptitudes";
	public elements: Aptitud[];
	@ViewChild('render', { read: ViewContainerRef }) private render: ViewContainerRef;

	constructor(
		private api: MAMApi,
		private resolver: ComponentFactoryResolver,
		private ngZone: NgZone,
		private changeDetector: ChangeDetectorRef) { }

	ngOnInit() {
		this.ngZone.runOutsideAngular(async () => {
			let elements = await this.api.getAptitudes();
			this.ngZone.run(() => { this.renderComponent(elements); });
		});
	}

	private renderComponent(elements: Aptitud[]): void {
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(BannerCarouselComponent);
		let reference = this.render.createComponent(factory);
		let component = (<BannerCarouselComponent>reference.instance);

		//-- Setting component params
		component.color = this.color;
		component.title = this.title;
		component.elements = elements;

		//-- Changes available on the view
		this.changeDetector.detectChanges();
	}
}

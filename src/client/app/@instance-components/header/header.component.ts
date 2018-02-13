/*tslint:disable*/
/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	ViewChild,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	Input } from '@angular/core';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';
import { Miniatura } from '@mam/interfaces';
import { HeaderComponent as Header } from '@mam/components';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-header',
	template: '<div #renderer></div>',
})
export class HeaderComponent implements OnInit {
	@ViewChild('renderer', {read:ViewContainerRef}) private renderer:ViewContainerRef;
	@Input('isPortafolio') public isPortafolio:Boolean = false;

	constructor(
		private bannerApi:ImageApi, 
		private resolver:ComponentFactoryResolver) { }

	/**
	 * Events
	 */
	async ngOnInit() {
		this.render(await this.bannerApi.getBannerHomeImages(), await this.bannerApi.getBannerHomeImagesTestimonies());
	}

	/**
	 * Actions
	 */
	private render (images:ImageResponse[], testimonies:Miniatura[]){
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(Header);
		let reference = this.renderer.createComponent(factory);
		let component = (<Header>reference.instance);

		//-- Setting component params
		component.bannerImages = images;
		component.miniaturas = testimonies;
		component.isPortafolio = this.isPortafolio;
	}
}

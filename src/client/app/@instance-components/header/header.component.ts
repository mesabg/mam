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
	@Input('isMAM') public isMAM:Boolean = false;
	@Input('isContacto') public isContacto:Boolean = false;
	constructor(
		private bannerApi:ImageApi, 
		private resolver:ComponentFactoryResolver) { }

	/**
	 * Events
	 */
	async ngOnInit() {
		if(this.isPortafolio){
			this.render(await this.bannerApi.getBannerPortafolioImages());
		}
		else if(this.isContacto){
			this.render(await this.bannerApi.getBannerContactoImages());
		}
		else if (this.isMAM){
			this.render(await this.bannerApi.getBannerMAMImages() );
		}
		else
			this.render(await this.bannerApi.getBannerHomeImages(), await this.bannerApi.getBannerHomeImagesTestimonies());
			

	}
	ngAfterViewInit(){
	}

	/**
	 * Actions
	 */
	private render (images:ImageResponse[], testimonies?:Miniatura[]){
		console.log(images);
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(Header);
		let reference = this.renderer.createComponent(factory);
		let component = (<Header>reference.instance);

		//-- Setting component params
		component.bannerImages = images;
		component.isPortafolio = this.isPortafolio;
		component.isMAM = this.isMAM;
		component.isContacto = this.isContacto;
		if(testimonies == undefined)
			component.miniaturas = [];
		else
			component.miniaturas = testimonies;
	}
}

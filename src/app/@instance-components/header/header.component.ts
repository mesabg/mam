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
	Input,
	NgZone } from '@angular/core';

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
		private resolver:ComponentFactoryResolver,
		private ngZone:NgZone) { }


	/**
	 * Events
	 */
	ngOnInit() {

		//-- Retrieve data outside angular zone
		this.ngZone.runOutsideAngular(async () => {

			if (this.isPortafolio) {
				let portafolioImages = await this.bannerApi.getBannerPortafolioImages();
				this.ngZone.run(() => { this.render(portafolioImages); });
			}
			else if (this.isContacto) {
				let bannerContactoImages = await this.bannerApi.getBannerContactoImages();
				this.ngZone.run(() => { this.render(bannerContactoImages); });
			}
			else if (this.isMAM) {
				let bannerMAMImages = await this.bannerApi.getBannerMAMImages();
				this.ngZone.run(() => { this.render(bannerMAMImages); });
			}
			else {
				let bannerHomeImages = await this.bannerApi.getBannerHomeImages();
				let testimonies = await this.bannerApi.getBannerHomeImagesTestimonies();
				this.ngZone.run(() => { this.render(bannerHomeImages, testimonies); });
			}
		});
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
		if(this.isPortafolio || this.isContacto || this.isMAM){
			component.bannerImages = [images[0]];
		}
		else{
			component.bannerImages = images;
		}
		
		component.isPortafolio = this.isPortafolio;
		component.isMAM = this.isMAM;
		component.isContacto = this.isContacto;
		if(testimonies == undefined)
			component.miniaturas = [];
		else
			component.miniaturas = testimonies;
	}
}

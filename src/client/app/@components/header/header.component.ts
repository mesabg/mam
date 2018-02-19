/*tslint:disable*/
/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	OnChanges } from '@angular/core';

import { Router } from '@angular/router';
import { CTAService } from '@mam/services';
declare const $:any;

/**
 * Local imports
 */
import { SlickJS } from '@ms/components';
import { ImageResponse } from '@mam/responses';
import { SETTINGS } from './header.slick-config';
import { Miniatura } from '@mam/interfaces';

/**
* Entry point
*/
/*import { InstanceBoxMiniaturaComponent } from '@mam/instance-components';*/
/**
 * MAM Application header
 */
@Component({
	selector: 'mam-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
	/**
	 * Input
	 */
	@Input('bannerImages') public bannerImages:ImageResponse[];
	@Input('miniaturas') public miniaturas:Miniatura[];
	@Input('isPortafolio') public isPortafolio:Boolean = false;

	
	/**
	 * View injection
	 */
	@ViewChild('carouselContainer', {read: ViewContainerRef}) private carouselContainer:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;
	public miniatura:Miniatura;
	constructor(public CTA:CTAService,private router:Router) { }

	/**
	 * Events
	 */
	ngOnInit() { this.parse();}
	ngOnChanges() { }
	ngAfterViewInit() {
		this.initSlickJS();
	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
		this.$carousel.eventAfterChange.subscribe(event => {
			let slide = event.currentSlide.currentSlide;
			this.miniatura = this.miniaturas[slide];
		});
	}


	private parse():void{
		this.miniatura = this.miniaturas[0];
	}


	public goto(url:string){
		this.router.navigateByUrl(url);
	}
}

/* tslint:disable */
/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	AfterViewInit,
	Input,
	ViewChild,
	ElementRef,
	ViewEncapsulation,
	EventEmitter,
	Output,
	ViewContainerRef,
	ComponentFactoryResolver,
	ChangeDetectorRef } from '@angular/core';
declare const $:any;

/**
 * Local imports
 */
import { ImageResponse } from '@mam/responses';
import { SlickJS } from '@ms/components';
import { SETTINGS } from './banner-instagram.slick-config';
import { ThumbnailInstagramCarouselComponent } from '../../thumbnails';


@Component({
	selector: 'mam-banner-instagram',
	templateUrl: './banner-instagram.component.html',
	styleUrls: ['./banner-instagram.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BannerInstagramComponent implements OnInit, AfterViewInit {
	/**
	 * Inputs
	 */
	@Input('titulo') public titulo:string;
	@Input('instagram') public instagram:ImageResponse[];

	/**
	 * Views
	 */
	@ViewChild('render', {read:ViewContainerRef}) private render:ViewContainerRef;
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;

	/**
	 * Outputs
	 */
	@Output('afterViewInit') public afterViewInit:EventEmitter<{$target:any}> = new EventEmitter<{$target:any}>();
	public viewInit:boolean = false;

	constructor(
		private resolver:ComponentFactoryResolver,
		private changeDetector:ChangeDetectorRef) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() {
		this.initSlickJS();
		this.renderThumbnails();
		this.viewInit = true;
		this.afterViewInit.emit();
	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}


	private renderThumbnails():void{
		if (!this.viewInit)
			this.afterViewInit.subscribe(() => {
				this.instagram.forEach((instagramImage:ImageResponse) => {
					this.renderThumbnail(instagramImage);
				});
			});
		else this.instagram.forEach((instagramImage:ImageResponse) => {
				this.renderThumbnail(instagramImage);
			});
	}


	private renderThumbnail(instagramImage:ImageResponse):void{
		//-- Creating component
		let factory = this.resolver.resolveComponentFactory(ThumbnailInstagramCarouselComponent);
		let reference = this.render.createComponent(factory);
		let component = (<ThumbnailInstagramCarouselComponent>reference.instance);

		//-- Setting component params
		component.resource = instagramImage;

		//-- Suscribe to events
		component.afterViewInit.subscribe((element) => {
			this.$carousel.push(element.$target);
		});

		this.changeDetector.detectChanges();
	}
}

/**
 * Global imports
 */
import { 
	Component, 
	OnInit, 
	Input,
	ViewChild,
	ElementRef,
	AfterViewInit } from '@angular/core';
//import {DomSanitizationService} from '@angular/platform-browser';
declare const $:any;

/**
 * Local imports
 */
import { DirectorioResponse } from '@mam/responses';
import { SlickJS } from '@ms/components';
import { SETTINGS } from './banner-miembros.slick-config';


@Component({
	selector: 'mam-banner-miembros',
	templateUrl: './banner-miembros.component.html',
	styleUrls: ['./banner-miembros.component.scss']
})
export class BannerMiembrosComponent implements OnInit, AfterViewInit {
	
	/**
	 * Inputs
	 */
	@Input('titulo') public titulo:string;
	@Input('directorio') public directorio:DirectorioResponse[];

	/**
	 * Views
	 */
	@ViewChild('carousel') private $carouselView:ElementRef;
	private $carousel:SlickJS;

	//constructor(sanitizer:DomSanitizationService) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.directorio.forEach( (data)=>{
			//this.sanitizer.bypassSecurityTrustUrl(data.url);
		})
	 }
	ngAfterViewInit() {
		this.initSlickJS();
	}
	ngOnChanges(){

	}


	/**
	 * Actions
	 */
	private initSlickJS():void{
		//this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
	}
}

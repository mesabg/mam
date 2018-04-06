/* tslint:disable */
import { 
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnChanges } from '@angular/core';
  import {DomSanitizer, SafeHtml } from '@angular/platform-browser';


import { Color } from '@mam/enums';
import { SlickJS } from '@ms/components';
import { SETTINGS } from './banner-carousel.slick-config';
import { Logro, LogroSafe } from '@mam/interfaces';
declare const $:any;

@Component({
  selector: 'mam-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('color') public color:Color;
  @Input('title') public title:string;
  @Input('elements') public elements:Logro[];
	/**
	 * Views
	 */
  @ViewChild('carousel') private $carouselView:ElementRef;
  
  private $carousel:SlickJS;
  public items: Array<LogroSafe> = [];
	constructor(private domSanitizer:DomSanitizer) { }

	/**
	 * Events
	 */
	ngOnInit() { }
	ngAfterViewInit() {
    this.initSlickJS();
    this.initArray()
    console.log("Elements :: ", this.elements);
    this.Sanitize(this.elements);
  }
  ngOnChanges(){
    console.log("On Changes :: ", this.elements);
    
  }


	/**
	 * Actions
	 */
  private initArray(){
    //this.item.
  }
	private initSlickJS():void{
		this.$carousel = new SlickJS($(this.$carouselView.nativeElement), SETTINGS);
  }
  private strip_html_tags(str)
  {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
  }
  private Sanitize(elements:Logro[]){
    
    for(var i =0; i< elements.length; i++){
      /*this.items.push({
        img : this.elements[i].img,
        title : this.domSanitizer.bypassSecurityTrustHtml(elements[i].title),
        content : this.domSanitizer.bypassSecurityTrustHtml(elements[i].content);
      });*/
      this.elements[i].title = this.strip_html_tags(this.elements[i].title);
      this.elements[i].content = this.strip_html_tags(this.elements[i].content);
    }  
  }
}

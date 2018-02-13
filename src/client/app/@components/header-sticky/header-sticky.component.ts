/*tslint:disable*/
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
	OnChanges,
	ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';
/**
 * Local Imports
 * CTA Service
 */
import { CTAService } from '@mam/services';
declare const $:any;

@Component({
  selector: 'mam-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss'],
  host: {
	'(window:resize)': 'onResize()'
	},
	encapsulation: ViewEncapsulation.None
})
export class HeaderStickyComponent implements OnInit {
	public expanded:boolean = false;
	public expandedMobile:boolean = false;
	/**
	* Ouput
	*/
	@Output() public onClick:EventEmitter<void> = new EventEmitter<void>();
  constructor(public CTA:CTAService,private router:Router) { }

  ngOnInit() {
	 // this.CTA.contacto();
  }


  public callback(page:string):void {
	  if (page === 'portafolio') this.CTA.portafolio();
	  else if (page === 'historias') this.CTA.historias();
	  else if (page === 'mam') this.CTA.mam();
	  else if (page === 'contacto') this.CTA.contacto();
	  this.greaterWidth();
	  this.burgerEffect();
  }

	public onResize(){
		
		if( $(window).width() < 1024){
			if(this.expanded){
				if(!this.expandedMobile){
					$(".stickybar-mobile").find(".burger-click-region").click();
					this.greaterWidthMobile();
					this.burgerEffectMobile();
				}		
			}
		}
		else{
			if(this.expandedMobile){
				if( ! this.expanded){
					$(".stickybar-mobile").find(".burger-click-region").click();
					this.greaterWidthMobile();
					this.burgerEffectMobile();				
				}
			}
		}
	}
 public greaterWidth():void{
 	if(! this.expanded){
 		$(".stickybar").css("width", "100vw");
 		$("body").addClass("blockScroll");
 		this.expanded =true;
		$(".stickybar").find(".lateral_bar").addClass("dark-theme");
		$(".chat").find("img").attr("src", "assets/svg/contact-on.svg");
 	}
 	else{
		this.expanded =false;
 		setTimeout(function(){
			$(".stickybar").css("width", "3.6vw");
 			$("body").removeClass("blockScroll");
			 $(".stickybar").find(".lateral_bar").removeClass("dark-theme");
			$(".chat").find("img").attr("src", "assets/svg/contact-black.svg");
 		},100);
 		
	 }
 	
 }
public greaterWidthMobile():void{
 	if(! this.expandedMobile){
 		$("body").addClass("blockScroll");
 		this.expandedMobile =true;
		$(".chat.mobile").find("img").hide();
		$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-white.svg");
		
 	}
 	else{
		this.expandedMobile =false;
 		setTimeout(function(){
 			$("body").removeClass("blockScroll");
			$(".chat.mobile").find("img").show();
			$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-black.svg");
 		},200);
 		
	 }

}
public callRRSS(socialNetwork){
	if (socialNetwork == "instagram")
		window.open("https://www.instagram.com/mamfotografo/", "_blank");
	else if(socialNetwork == "facebook")
		window.open("https://wwww.facebook.com/mamfotografo/", "_blank");
	else window.open("https://twitter.com/mamfotografo/", "_blank");
}


 public burgerEffect (){
	var clickDelay = 500,
    clickDelayTimer = null;
	if(clickDelayTimer === null) {
		var $burger = $(".stickybar").find(".burger-click-region");
		if($burger.hasClass('active')) {
			$burger.addClass('closing');
			$burger.removeClass('active');
		}
		else{
			$burger.addClass('active');
		}
		
		clickDelayTimer = setTimeout(function () {
		$burger.removeClass('closing');
		clearTimeout(clickDelayTimer);
		clickDelayTimer = null;
		}, clickDelay);
	}

 }

 public burgerEffectMobile (){
	var clickDelay = 500,
    clickDelayTimer = null;
	if(clickDelayTimer === null) {
		var $burger = $(".stickybar-mobile").find(".burger-click-region");
		if($burger.hasClass('active')) {
			$burger.addClass('closing');
			$burger.removeClass('active');
		}
		else{
			$burger.addClass('active');
		}
		clickDelayTimer = setTimeout(function () {
		$burger.removeClass('closing');
		clearTimeout(clickDelayTimer);
		clickDelayTimer = null;
		}, clickDelay);
	}

 }

}

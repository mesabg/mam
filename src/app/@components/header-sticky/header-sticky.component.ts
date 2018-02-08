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
	OnChanges  } from '@angular/core';

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
public onResize(){
	
	if( $(window).width() < 1024){
		if(this.expanded){
			console.log("entre");
			this.expandedMobile =false;
			this.greaterWidthMobile();
		}
	}
	else{
		if(this.expandedMobile){
			this.expanded =true;
			this.greaterWidth();
		}
	}
	console.log("desktop |"+ this.expanded);
	console.log("mobile |"+ this.expandedMobile);
}
 public greaterWidth():void{
 	if(! this.expanded){
 		$(".stickybar").css("width", "100vw");
 		$("body").addClass("blockScroll");
 		this.expanded =true;
		$(".lateral_bar").addClass("dark-theme");
		$(".chat").find("img").attr("src", "assets/svg/contact-on.svg");
 	}
 	else{
		this.expanded =false;
		/*if(this.expandedMobile){
			this.greaterWidthMobile();
		}*/
 		setTimeout(function(){
			$(".stickybar").css("width", "3.6vw");
 			$("body").removeClass("blockScroll");
			$(".lateral_bar").removeClass("dark-theme");
			$(".chat").find("img").attr("src", "assets/svg/contact-black.svg");
 		},1000);
 		
 	}
 	
 }
public greaterWidthMobile():void{
 	if(! this.expandedMobile){
 		$("body").addClass("blockScroll");
 		this.expandedMobile =true;
		//$(this).removeClass("fa-bars");
		$(".chat.mobile").find("img").hide();
		$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-white.svg");
		//$(this).addClass("fa-times");
		
 	}
 	else{
		this.expandedMobile =false;
		/*if(this.expanded){
			this.greaterWidth();
		}*/
 		setTimeout(function(){
 			$("body").removeClass("blockScroll");
			//$(this).removeClass("fa-times");
			$(".chat.mobile").show();
			$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-black.svg");
 			//$(this).addClass("fa-bars");
 		},200);
 		
 	}
 	
 }
public callRRSS(socialNetwork){
	if(socialNetwork == "instagram"){
		window.open("https://www.instagram.com/mamfotografo/", "_blank");
	}
	else if(socialNetwork == "facebook"){
		window.open("https://wwww.facebook.com/mamfotografo/", "_blank");
	}
	else{
		window.open("https://twitter.com/mamfotografo/", "_blank");
	}
}


 public burgerEffect (){
	var clickDelay = 500,
    clickDelayTimer = null;
	if(clickDelayTimer === null) {
		var $burger = $(".burger-click-region");
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

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

declare const $:any;

@Component({
  selector: 'mam-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss']
})
export class HeaderStickyComponent implements OnInit {
	public expanded:boolean = false;
	/**
	* Ouput
	*/
	@Output() public onClick:EventEmitter<void> = new EventEmitter<void>();
  constructor(private router:Router) { }

  ngOnInit() {
  }

 public greaterWidth():void{
 	if(! this.expanded){
 		$(".stickybar").css("width", "100vw");
 		$("body").addClass("blockScroll");
 		this.expanded =true;
 		$(".hamButton").removeClass("fa-bars");
		$(".hamButton").addClass("fa-times");
		$(".lateral_bar").addClass("dark-theme");
		$(".chat").find("img").attr("src", "assets/svg/contact-on.svg");
 	}
 	else{
 		this.expanded =false;
 		setTimeout(function(){
			 //$(".stickybar").css("width", "100px");
			$(".stickybar").css("width", "3.6vw");
 			$("body").removeClass("blockScroll");
			$(".hamButton").removeClass("fa-times");
			$(".lateral_bar").removeClass("dark-theme");
			$(".chat").find("img").attr("src", "assets/svg/contact-black.svg");
 			$(".hamButton").addClass("fa-bars");
 		},1000);
 		
 	}
 	
 }
  public greaterWidthMobile():void{
 	if(! this.expanded){
 		//$(".stickybar-mobile").css("width", "100vw");
 		$("body").addClass("blockScroll");
 		this.expanded =true;
		$(this).removeClass("fa-bars");
		$(".chat.mobile").find("img").hide();
		$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-white.svg");
		$(this).addClass("fa-times");
		
 	}
 	else{
 		this.expanded =false;
 		setTimeout(function(){
 			//$(".stickybar-mobile").css("width", "100px");
 			$("body").removeClass("blockScroll");
			$(this).removeClass("fa-times");
			$(".chat.mobile").show();
			$(".logo-mobile").find("img").attr("src", "assets/svg/mam-logo-black.svg");
 			$(this).addClass("fa-bars");
 		},200);
 		
 	}
 	
 }



 public goto(url:string){
	this.router.navigateByUrl(url);
	$("body").removeClass("blockScroll");
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

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
 	}
 	else{
 		this.expanded =false;
 		setTimeout(function(){
 			$(".stickybar").css("width", "100px");
 			$("body").removeClass("blockScroll");
 		},1000);
 		
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

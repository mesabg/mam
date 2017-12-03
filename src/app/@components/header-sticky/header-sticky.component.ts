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
 	}
 	else{
 		this.expanded =false;
 		setTimeout(function(){
 			$(".stickybar").css("width", "100px");
 			$("body").removeClass("blockScroll");
 			$(".hamButton").removeClass("fa-times");
 			$(".hamButton").addClass("fa-bars");
 		},1000);
 		
 	}
 	
 }
  public greaterWidthMobile():void{
 	if(! this.expanded){
 		$(".stickybar-mobile").css("width", "100vw");
 		$("body").addClass("blockScroll");
 		this.expanded =true;
 		$(this).removeClass("fa-bars");
 		$(this).addClass("fa-times");
 	}
 	else{
 		this.expanded =false;
 		setTimeout(function(){
 			$(".stickybar-mobile").css("width", "100px");
 			$("body").removeClass("blockScroll");
 			$(this).removeClass("fa-times");
 			$(this).addClass("fa-bars");
 		},1000);
 		
 	}
 	
 }



 public goto(url:string){
	this.router.navigateByUrl(url);
	$("body").removeClass("blockScroll");
 }
}

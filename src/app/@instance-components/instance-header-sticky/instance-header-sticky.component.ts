import { Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	OnChanges } from '@angular/core';
declare const $:any;
@Component({
  selector: 'mam-instance-header-sticky',
  templateUrl: './instance-header-sticky.component.html',
  styleUrls: ['./instance-header-sticky.component.scss']
})
export class InstanceHeaderStickyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public showMenu():void{
  	$("#Menu-Fixed").show();
  }
}

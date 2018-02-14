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
	import { State } from '@mam/services';
declare const $:any;
@Component({
  selector: 'mam-instance-header-sticky',
  templateUrl: './instance-header-sticky.component.html',
  styleUrls: ['./instance-header-sticky.component.scss']
})
export class InstanceHeaderStickyComponent implements OnInit {
	@Input() public state:State;
  constructor() { }

  ngOnInit() {
		console.log(this.state.params);
  }
  public showMenu():void{
  	$("#Menu-Fixed").show();
  }
}

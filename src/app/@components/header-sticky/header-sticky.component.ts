import { Component, 
	OnInit,
	AfterViewInit,
	ViewChild,
	ViewContainerRef,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	OnChanges  } from '@angular/core';

declare const $:any;

@Component({
  selector: 'mam-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss']
})
export class HeaderStickyComponent implements OnInit {

	/**
	* Ouput
	*/
	@Output() public onClick:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
}

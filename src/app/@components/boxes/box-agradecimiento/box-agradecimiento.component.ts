import { Component, OnInit, Output,EventEmitter } from '@angular/core';
declare const $:any;
@Component({
  selector: 'mam-box-agradecimiento',
  templateUrl: './box-agradecimiento.component.html',
  styleUrls: ['./box-agradecimiento.component.scss']
})
export class BoxAgradecimientoComponent implements OnInit {
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  public click():void{
		this.onClick.emit();
	}
}

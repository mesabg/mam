import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'mam-instance-box-agradecimiento',
  templateUrl: './instance-box-agradecimiento.component.html',
  styleUrls: ['./instance-box-agradecimiento.component.scss']
})
export class InstanceBoxAgradecimientoComponent implements OnInit {
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  public click():void{
		this.onClick.emit();
	}

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mam-box-menu',
  templateUrl: './box-menu.component.html',
  styleUrls: ['./box-menu.component.scss']
})
export class BoxMenuComponent implements OnInit {
  @Output('close') public close:EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit() {
  }

}

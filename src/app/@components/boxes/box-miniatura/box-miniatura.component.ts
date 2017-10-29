import { Component, OnInit, Input } from '@angular/core';
import { Miniatura } from '@mam/interfaces';
@Component({
  selector: 'mam-box-miniatura',
  templateUrl: './box-miniatura.component.html',
  styleUrls: ['./box-miniatura.component.scss']
})
export class BoxMiniaturaComponent implements OnInit {

  @Input('miniatura') public miniatura:Miniatura;
  constructor() { }

  ngOnInit() {
  }

}

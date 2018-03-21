import { Component, OnInit, Input, Output } from '@angular/core';
import { BioInfo } from '@mam/interfaces';
@Component({
  selector: 'mam-box-bio',
  templateUrl: './box-bio.component.html',
  styleUrls: ['./box-bio.component.scss']
})
export class BoxBioComponent implements OnInit {

  @Input('bio') public bio:BioInfo;
  constructor() { }

  ngOnInit() {
  }

}

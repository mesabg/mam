import { Component, OnInit, Input, Output } from '@angular/core';
import { BioInfo } from '@mam/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'mam-box-bio',
  templateUrl: './box-bio.component.html',
  styleUrls: ['./box-bio.component.scss']
})
export class BoxBioComponent implements OnInit {

  @Input('bio') public bio:BioInfo;
  public cita:SafeHtml;
  public descripcion:SafeHtml;
  constructor(public domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.sanitizeHtml(this.bio);
  }
  private sanitizeHtml(bio:BioInfo){
    this.cita = this.domSanitizer.bypassSecurityTrustHtml(bio.cita);
    this.descripcion = this.domSanitizer.bypassSecurityTrustHtml(bio.descripcion);
  }
}

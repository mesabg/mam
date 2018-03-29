import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '@mam/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'mam-box-preguntas',
  templateUrl: './box-preguntas.component.html',
  styleUrls: ['./box-preguntas.component.scss']
})
export class BoxPreguntasComponent implements OnInit {

  @Input("question") public pregunta:Pregunta;
  public question:SafeHtml;
  public answer:SafeHtml;
  constructor(public domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.sanitizeHtml(this.pregunta);
  }

  private sanitizeHtml(pregunta:Pregunta){
    this.question = this.domSanitizer.bypassSecurityTrustHtml(pregunta.question);
    this.answer = this.domSanitizer.bypassSecurityTrustHtml(pregunta.answer);
  }
}

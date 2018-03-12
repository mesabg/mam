import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '@mam/interfaces';

@Component({
  selector: 'mam-box-preguntas',
  templateUrl: './box-preguntas.component.html',
  styleUrls: ['./box-preguntas.component.scss']
})
export class BoxPreguntasComponent implements OnInit {

	@Input("question") public pregunta:Pregunta;
  constructor() { }

  ngOnInit() {
  	console.log(this.pregunta);
  }

}

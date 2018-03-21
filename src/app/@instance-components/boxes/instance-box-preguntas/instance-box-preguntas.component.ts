import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '@mam/interfaces';
import { Observable } from 'rxjs';
@Component({
  selector: 'mam-instance-box-preguntas',
  templateUrl: './instance-box-preguntas.component.html',
  styleUrls: ['./instance-box-preguntas.component.scss']
})
export class InstanceBoxPreguntasComponent implements OnInit {

	@Input("questions") public questions:Observable<Pregunta[]>;
  constructor() { }

  ngOnInit() {
  	console.log(this.questions);
  }

}

import { Component, OnInit,NgZone,ViewChild,
	ViewContainerRef,
	ComponentFactory,
  ComponentFactoryResolver,Input } from '@angular/core';
  
	/**
 * Local imports
 */
import { PreguntaApi } from '@mam/api';
import { PreguntaResponse } from '@mam/responses';
import { Pregunta } from '@mam/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'mam-instance-box-preguntas',
  templateUrl: './instance-box-preguntas.component.html',
  styleUrls: ['./instance-box-preguntas.component.scss']
})
export class InstanceBoxPreguntasComponent implements OnInit {

	@Input("questions") public questions:Pregunta[];
  constructor(
    private ngZone:NgZone,
    private preguntaApi:PreguntaApi,
    private resolver:ComponentFactoryResolver
  ) { }

  ngOnInit() {
  	//-- Retrieve data outside angular zone
		this.ngZone.runOutsideAngular(async () => {
      let responsePreguntas = await this.preguntaApi.getContactQuestions();
      this.ngZone.run(() => { this.render(responsePreguntas); });
    });
  }
  
  private render(responsePreguntas:PreguntaResponse[]){
    this.questions = responsePreguntas;
  }

}

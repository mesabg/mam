/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { PreguntaApi } from '@mam/api';
import { PreguntaResponse } from '@mam/responses';
import { Contacto } from '@mam/interfaces';
//import { BodaForm } from '@mam/interfaces';
/**
 * PAGE => Contacto
 */
@Component({
	selector: 'app-contacto-page',
	templateUrl: './contacto.page.html',
	styleUrls: ['./contacto.page.scss']
})
export class ContactoPage implements OnInit {

	public contacto:Contacto ={
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis ratione saepe quia a pariatur libero quibusdam sequi, minus esse, sapiente nobis similique, hic! Aperiam labore nulla, dolorem! Voluptatum, iusto?",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad impedit voluptatem ipsum, obcaecati fugiat vitae fuga necessitatibus exercitationem sunt iusto, explicabo perspiciatis doloremque itaque ab dolorum ut nam! Iste, repellat?"
	}
	public preguntas:Observable<PreguntaResponse[]>;
	constructor(private api:PreguntaApi) { }
	ngOnInit() {
		//-- Form initialization
		/*this.formService.initForm(ARNAC_FORM);
		this.formService
			.submit$
			.subscribe((data:ARNACForm) =>{
				//-- Parse data and call a function to resolve
				this.resolveSubmit(data);
			});	
		this.retrieve();*/
	}


	/**
	 * Actions
	 */
	private retrieve():void{
		this.preguntas = this.api.getContactQuestions();
	}

	public changeMenu(){
		//-- DO SOMETHING
	}
	public showThanks(){
		//-- DO SOMETHING
	}

	private resolveSubmit(formData):void{
		/*this.api.publishARNAC(formData).subscribe((state:APIStatus) =>{
			if (state.status === 'AC'){ 
				//-- Correct answer		
			}else if (state.status === 'WA'){ 
				//-- Wrong answer			
			}else{ 
				//-- Unknown error
			}
			this.formService.unlockSubmit();
		});*/
	}
}

/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit,ElementRef, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { PreguntaApi } from '@mam/api';
import { PreguntaResponse } from '@mam/responses';
import { Contacto } from '@mam/interfaces';
import { ContactoApi  } from '@mam/api';
import { ContactoForm } from 'app/#interfaces/contacto.form.interface';
import { APIStatus } from 'app/@api/#responses/status.response';
import { FormService } from '@mam/services';
import { State,CTAService } from '@mam/services';

declare const $:any;
/**
 * PAGE => Contacto
 */
@Component({
	selector: 'app-contacto-page',
	templateUrl: './contacto.page.html',
	styleUrls: ['./contacto.page.scss']
})
export class ContactoPage implements OnInit {

	/**
	 * Inputs
	 */
	@Input() public state:State;

	public contacto:Contacto ={
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reiciendis ratione saepe quia a pariatur libero quibusdam sequi, minus esse, sapiente nobis similique, hic! Aperiam labore nulla, dolorem! Voluptatum, iusto?",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad impedit voluptatem ipsum, obcaecati fugiat vitae fuga necessitatibus exercitationem sunt iusto, explicabo perspiciatis doloremque itaque ab dolorum ut nam! Iste, repellat?"
	}
	public preguntas:Observable<PreguntaResponse[]>;
	constructor(private CTA:CTAService, private api:PreguntaApi, private ContactoApi:ContactoApi,private formService:FormService,) { }
	ngOnInit() {
		this.formService
			.submit$
			.subscribe((data:ContactoForm) =>{
				//-- Parse data and call a function to resolve
				this.resolveSubmit(data);
			});
		this.retrieve();
		
		
	}
	ngAfterViewInit(){
		this.CTA.$routeChange.subscribe( (data)=> {
			this.state = data;
			console.log(data);
			//window.location.href = "/contacto#"+data.params;
		});
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
    private resolveSubmit(formData:ContactoForm):void{
		$("#WA").hide();
		console.log("submitieando");
		console.log(formData); 
		this.ContactoApi.publishContacto(formData).subscribe((state:APIStatus) =>{
				if (state.status === 'AC'){ 
				//-- Correct answer		
					$("#boxThanks").show();
				}else if (state.status === 'WA'){ 
				//-- Wrong answer
					$("#WA").show();
				}else{ 
				//-- Unknown error
				// $(this.errorRef.nativeElement).addClass('active');
				}
				this.formService.unlockSubmit();
			});
	  }
	public dispose(){
		$("#boxThanks").fadeOut(600);
	}
}

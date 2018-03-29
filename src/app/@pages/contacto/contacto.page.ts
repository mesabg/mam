/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit,ElementRef, ViewChild, Input,NgZone } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { ContactoInfoResponse ,APIStatus } from '@mam/responses';
import { Contacto,ContactoForm } from '@mam/interfaces';
import { ContactoApi  } from '@mam/api';
import { FormService } from '@mam/services';
import { State,CTAService } from '@mam/services';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

	public title:SafeHtml;
	public description:SafeHtml;

	constructor(private CTA:CTAService, 
		private ContactoApi:ContactoApi,
		private formService:FormService,
		private ngZone:NgZone,
		private domSanitizer:DomSanitizer) { }

	ngOnInit() {
		//-- Retrieve data outside angular zone
		this.ngZone.runOutsideAngular(async () => {
			let responseContacto = await this.ContactoApi.contactoInfo();
			this.ngZone.run(() => { this.render(responseContacto); });
		  });

		this.formService
			.submit$
			.subscribe((data:ContactoForm) =>{
				//-- Parse data and call a function to resolve
				this.resolveSubmit(data);
			});
		
		
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

	private render(responseContacto:ContactoInfoResponse){
		this.sanitizeHtml(responseContacto);
	}
	private sanitizeHtml(responseContacto:ContactoInfoResponse){
		this.title = this.domSanitizer.bypassSecurityTrustHtml(responseContacto.title);
		this.description = this.domSanitizer.bypassSecurityTrustHtml(responseContacto.description);
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

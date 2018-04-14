/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/**
 * API Import
 */
import { ApiService, LazyParser, ServerError } from '@ms/api';
import { ContactoForm } from '@mam/interfaces';
import { APIStatus,ContactoInfoResponse,FooterResponse } from './#responses';
import { promise } from 'protractor';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to post "ARNAC" form data.
 */
@Injectable()
export class ContactoApi {
	constructor(private apiService:ApiService) {}

	/**
	 * API Functions
	 */
	public publishContacto(formData:ContactoForm):Observable<APIStatus> {
		return this.apiService.post('contact', formData)
				.map(response => response.json());
	}

	public contactoInfo():Promise<ContactoInfoResponse> {
		return this.apiService.get("page/contact")
		.map(response => response.json())
		.map(response => {
			console.log(response);
			return {								
				title: response.content.title,
				description: response.content.description
			};	
		}).toPromise();
		
	}

	public footerInfo():Promise<FooterResponse>{
		return this.apiService.get("page/contact")
		.map(response => response.json())
		.map(response => {
			console.log(response);
			return {								
				text: response.title,
			};	
		}).toPromise();
	}
}
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
import { APIStatus } from './#responses';

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
		return this.apiService.post('contacto-form', formData)
				.map(response => response.json());
	}
	
}
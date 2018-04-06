/* tslint:disable */
/**
 * Global imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Local imports
 */
import { ApiService, LazyParser, ServerError } from '@ms/api';
import { CitaResponse } from './#responses';
import { Logro } from 'app/#interfaces/logro.interface';
import { Aptitud } from 'app/#interfaces/aptitud.interface';

/**
 * Service description
 * - This service manage the data retrive data within the API
 * MAM page data
 */
@Injectable()
export class MAMApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get Banner Images
	 */
	public getCita():Promise<CitaResponse>{
		return this.apiService.get('page/mam')
					.map(response => response.json())
					.map(response => {
							return {								
								cita: response.content.title,
								descripcion: response.content.description
							}
					}).toPromise();

        /*return Observable.create(observer => {
            const response:CitaResponse = {
                cita: `No se trata de hacer una buena foto, se trata de crear una historia a través de los momentos que capturas`,
                descripcion: `Lorem ipsum dolor sit amet enum qualita, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
			};
            observer.next(response);
            observer.complete();
        });*/
	}


	public getLogros():Promise<Logro[]>{
		return this.apiService
			.get('achievements')
			.map(response => response.json())
			.map(response => {
				return response.map(item => {
					return {
						img: item.image.secure_url,
						title: item.name,
						content: item.content
					};
				});
			})
			.toPromise();
	}


	public getAptitudes():Promise<Aptitud[]>{
		return this.apiService
			.get('aptitudes')
			.map(response => response.json())
			.map(response => {
				return response.map(item => {
					return {
						img: item.image.secure_url,
						title: item.name,
						content: item.content
					};
				});
			})
			.toPromise();
	}


	public async getBiography(): Promise<any> {
		try {
			return (await this.apiService.get('biography').map(response => response.json()).toPromise());
		} catch (reason) {
			console.log("An error ocurred while retrieving biography data");
			return reason;
		}
	}


	public async getContactoBrief(): Promise<any>{
		try {
			return this.apiService
					.get('CTA-contact')
					.map(response => response.json())
					.map(response => response.page[0].content.brief)
					.toPromise();
		} catch (reason) {
			console.log("An error ocurred while retrieving contact brief");
			return reason;
		}
	}
}

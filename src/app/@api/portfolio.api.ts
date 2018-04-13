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
import { ImageResponse } from './#responses';
import { Portfolio } from '@mam/interfaces';

/**
 * Service description
 * - This service manage the data retrive data within the API
 * MAM page data
 */
@Injectable()
export class PortfolioApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get Banner Images
	 */
	public getPortfolio():Promise<ImageResponse[]>{
		return this.apiService.get('page/mam')
					.map(response => response.json())
					.map(response => {
							return [{								
                                image: response.image,
                                name: response.name,
                                place: response.place,
                                description: response.description,
							}]
					}).toPromise();
    }
}
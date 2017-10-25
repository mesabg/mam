/**
 * Global imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Local imports
 */
import { ApiService, LazyParser, ServerError } from '@ms/api';
import { DirectorioResponse } from './#responses';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Logos" data.
 */
@Injectable()
export class DirectorioApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get Logos
	 */
	public getLogos():Observable<DirectorioResponse[]>{
        return Observable.create(observer => {
            let response:DirectorioResponse[] = [
                {
                    logo: 'assets/images/fearless.png',
                    name: 'FEARLESS'
                },{
                    logo: 'assets/images/mywed.png',
                    name: 'Mywed'
                }
            ];
            observer.next(response);
            observer.complete();
        });
	}
}

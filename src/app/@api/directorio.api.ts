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
                    logo: 'https://www.fearlessphotographers.com/banner-display.cfm?photogID=7836',
                    name: 'FEARLESS',
                    iframe: true,
                    clickeable: true
                    
                },{
                    logo: 'https://mywed.com/images/mywed-logo/logo_mywed_vertical_black.svg',
                    name: 'Los mejores fotógrafos de boda de todo el mundo están en MyWed',
                    iframe: false,
                    url: "https://mywed.com/es/",
                    clickeable:true
                }
            ];
            observer.next(response);
            observer.complete();
        });
	}
}

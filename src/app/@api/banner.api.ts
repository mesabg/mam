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
import { BannerResponse } from './#responses';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
@Injectable()
export class BannerApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get Banner Images
	 */
	public getBannerImages():Observable<BannerResponse[]>{
        return Observable.create(observer => {
            let response:BannerResponse[] = [
                {
                    image: 'assets/images/foto-01.png',
                    name: 'Photo 1'
                },{
                    image: 'assets/images/foto-02.png',
                    name: 'Photo 2'
                }
            ];
            observer.next(response);
            observer.complete();
        });
		/*return this.apiService.get(`banner_principal`)
			.map((response:Response) => {
				//-- Parse response to an actual api response
				//-- @ Check errors from http request
				if (ServerError(response))
					throw Observable.throw(`An error has orurred ${response.status} ${response.statusText}`);
				return <BannerResponse[]> LazyParser(response.json());
			});*/
	}
}

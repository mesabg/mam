/*tslint:disable*/
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
import { ImageResponse } from './#responses';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
@Injectable()
export class ImageApi {
	constructor(private apiService:ApiService) { }

	/**
	 * Get Banner Images
	 */
	public getBannerHomeImages():Observable<ImageResponse[]>{
        return Observable.create(observer => {
            let response:ImageResponse[] = [
                {
                    image: 'assets/images/foto-01.png',
                    name: 'Photo 1'
                },{
                    image: 'assets/images/majo-y-ale.png',
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


	public getHomeImages():Observable<ImageResponse[]>{
        return Observable.create(observer => {
            let response:ImageResponse[] = [
                {
                    image: 'assets/images/majo-y-ale.png',
					name: 'Majo y Ale',
					place: 'Valencia, Venezuela'
				},
				{
                    image: 'assets/images/mariella-y-elrick.png',
					name: 'Mariella y Elrik',
					place: 'Valencia, Venezuela'
				},
				{
                    image: 'assets/images/isabel-y-edgar.png',
					name: 'Isabel y Edgar',
					place: 'Valencia, Venezuela'
				},
				{
                    image: 'assets/images/carolina-y-gabriel.png',
					name: 'Carolina y Gabriel',
					place: 'Valencia, Venezuela'
				},
				{
                    image: 'assets/images/ainhoa-y-luis.png',
					name: 'Ainhoa y Luis',
					place: 'Valencia, Venezuela'
                }
            ];
            observer.next(response);
            observer.complete();
        });
	}


	public getInstagramImages():Observable<ImageResponse[]>{
		return Observable.create(observer => {
            let response:ImageResponse[] = [
                {
                    image: 'assets/images/majo-y-ale.png',
					name: 'Majo y Ale',
					place: 'Valencia, Venezuela',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
                    image: 'assets/images/mariella-y-elrick.png',
					name: 'Mariella y Elrik',
					place: 'Valencia, Venezuela',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
                    image: 'assets/images/isabel-y-edgar.png',
					name: 'Isabel y Edgar',
					place: 'Valencia, Venezuela',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
                    image: 'assets/images/carolina-y-gabriel.png',
					name: 'Carolina y Gabriel',
					place: 'Valencia, Venezuela',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				},
				{
                    image: 'assets/images/ainhoa-y-luis.png',
					name: 'Ainhoa y Luis',
					place: 'Valencia, Venezuela',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ];
            observer.next(response);
            observer.complete();
        });
	}
}

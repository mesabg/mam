/* tslint:disable */
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
	public getCita():Observable<CitaResponse>{
        return Observable.create(observer => {
            const response:CitaResponse = {
                cita: `No se trata de hacer una buena foto, se trata de crear una historia a través de los momentos que capturas`,
                descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            };
            observer.next(response);
            observer.complete();
        });
	}


	public getLogros():Observable<Logro[]>{
        return Observable.create(observer => {
            let response:Logro[] = [
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-0.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				}
            ];
            observer.next(response);
            observer.complete();
        });
	}


	public getAptitudes():Observable<Aptitud[]>{
		return Observable.create(observer => {
            let response:Aptitud[] = [
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				},
                {
                    img: 'assets/images/box-1.png',
					title: 'Et endenem nosam estintibus vellupi',
					content: 'Et endenem nosam estintibus vellupi dundae. Nem. Nam, sa volorporibus estorro mincit fugit quiae res ea pe'
				}
            ];
            observer.next(response);
            observer.complete();
        });
	}
}

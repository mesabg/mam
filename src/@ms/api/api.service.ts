/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Environment Import
 */
import { environment } from "@environment";

/**
 * [API Rest Service definition]
 */
@Injectable()
export class ApiService {
	protected headers:Headers;
	protected baseUrl:string = environment.API.URL();

	constructor(protected http:Http) {
		this.headers = new Headers();
		this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
	}

	public get(method: string):Observable<any>{
		return this.http.get(this.baseUrl + method, { headers: this.headers} );
	}

	public post(method: string, body: any):Observable<any>{
		return this.http.post(this.baseUrl + method, body, { headers: this.headers} );
	}

	public put(method: string, body: any):Observable<any>{
		return this.http.put(this.baseUrl + method, body, { headers: this.headers} );
	}

	public delete(method: string):Observable<any>{
		return this.http.delete(this.baseUrl + method, { headers: this.headers} );
	}
}

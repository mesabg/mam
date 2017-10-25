/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';

/**
 * PAGE => Home
 */
@Component({
	selector: 'app-home-page',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	public images:Observable<ImageResponse[]>;
	public options:string[] = ['full', 'left', 'right'];
	constructor(private api:ImageApi) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}


	/**
	 * Actions
	 */
	private retrieve():void{
		this.images = this.api.getHomeImages();
	}
}

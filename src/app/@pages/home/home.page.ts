/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { ImageApi, MAMApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';
import { featuredContent} from '@mam/interfaces';

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
	public featuredContent:featuredContent;
	
	constructor(private api:ImageApi, private mamApi:MAMApi) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
		this.getQuote();
	}


	/**
	 * Actions
	 */
	private retrieve():void{
		this.images = this.api.getHighlightImages();
	}

	private async getQuote(): Promise<void> {
		let response = await this.mamApi.getBiography();
		this.featuredContent = {
			content: response.biography[0].authorQuote,
			author: "Miguel Ángel Martínez"
		}
	}

	public changeMenu(){
		console.log("hola");
	}
}

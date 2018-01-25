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
		this.images = this.api.getHomeImages();
	}
	private async getQuote(): Promise<void>{
		let response = await this.mamApi.getBiography();
		console.log("Response is :: ", response);
		this.featuredContent = {
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nihil laboriosam quis deleniti hic debitis possimus, voluptatum consectetur placeat cupiditate numquam, repellendus veniam sit dicta quaerat, corrupti ducimus cum ab.",
			author: "Miguel Ángel Martínez"
		}
	}

	public changeMenu(){
		console.log("hola");
	}
}

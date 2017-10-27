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
	
	constructor(private api:ImageApi) { }

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
	private getQuote():void{
		this.featuredContent ={
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nihil laboriosam quis deleniti hic debitis possimus, voluptatum consectetur placeat cupiditate numquam, repellendus veniam sit dicta quaerat, corrupti ducimus cum ab.",
			author: "Miguel Angel Martinez"
		}
	}

}

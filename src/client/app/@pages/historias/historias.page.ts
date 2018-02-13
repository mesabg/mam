/*tslint:disable*/
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
import { CTAService } from '@mam/services';

/**
 * PAGE => Historias
 */
@Component({
	selector: 'app-historias-page',
	templateUrl: './historias.page.html',
	styleUrls: ['./historias.page.scss']
})
export class HistoriasPage implements OnInit {
	public images:Observable<ImageResponse[]>;
	public featuredContent:featuredContent;
	
	constructor(private api:ImageApi, public CTA:CTAService) { }

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
	private getQuote():void{
		this.featuredContent ={
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nihil laboriosam quis deleniti hic debitis possimus, voluptatum consectetur placeat cupiditate numquam, repellendus veniam sit dicta quaerat, corrupti ducimus cum ab.",
			author: "Miguel Angel Martinez"
		}
	}

	public changeMenu(){
		console.log("hola");
	}

	public desplegarDetalle(event){
		console.log("Desplegar detalle de ", event);
	}


	public goto(where:string){
		//-- DO SOMETHING
	}
}

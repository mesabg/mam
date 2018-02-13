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

/**
 * PAGE => Portafolio
 */
@Component({
	selector: 'app-portafolio-page',
	templateUrl: './portafolio.page.html',
	styleUrls: ['./portafolio.page.scss']
})
export class PortafolioPage implements OnInit {
	public images:Observable<ImageResponse[]>;
	public titulo:string = "Sigue estas y otras historias en instagram";

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
		this.images = this.api.getHighlightImages();
	}

	public changeMenu(){
		console.log("hola");
	}
}

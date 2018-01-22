/*tslint:disable*/
/**
 * Global components
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';


@Component({
	selector: 'mam-instance-banner-instagram',
	template: `<mam-banner-instagram [titulo]="titulo" [instagram]="instagram | async"></mam-banner-instagram>`
})
export class InstanceBannerInstagramComponent implements OnInit {
	public instagram:Observable<ImageResponse[]>;
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
		this.instagram = this.api.getInstagramImages();
	}
}

/*tslint:disable*/
/**
 * Global components
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

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
	private async retrieve(): Promise<void>{
		this.instagram = this.api.getInstagramImages_();
		let response = await this.api.getInstagramImages_().toPromise();
		console.log("Response is :: ", response);
	}
}

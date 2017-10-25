/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local imports
 */
import { ImageApi } from '@mam/api';
import { ImageResponse } from '@mam/responses';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	public bannerImages:ImageResponse[];
	constructor(private bannerApi:ImageApi) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}

	/**
	 * Actions
	 */
	private retrieve (){
		this.bannerApi.getBannerHomeImages().subscribe((response:ImageResponse[]) =>{
			this.bannerImages = response;
		});
	}
}

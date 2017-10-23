/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local imports
 */
import { BannerApi } from '@mam/api';
import { BannerResponse } from '@mam/responses';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
	public bannerImages:BannerResponse[];
	constructor(private bannerApi:BannerApi) { }

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
		this.bannerApi.getBannerImages().subscribe((response:BannerResponse[]) =>{
			this.bannerImages = response;
		});
	}
}

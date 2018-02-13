/*tslint:disable*/
/**
 * Global imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/**
 * Local imports
 */
import { ApiService, LazyParser, ServerError } from '@ms/api';
import { ImageResponse } from './#responses';
import { Miniatura } from '@mam/interfaces';

/**
 * Service description
 * - This service manage the data retrive within the API
 * to get "Banner" data.
 */
@Injectable()
export class ImageApi {
	constructor(private apiService:ApiService) {}

	/**
	 * Get Banner Images
	 */
	public async getBannerHomeImages():Promise<ImageResponse[]>{
		return this.apiService.get('banner')
					.map(response => response.json())
					.map(response => {
						return response.portfolio.map(section => {
							return {
								image: section.banner.url,
								name: section.name
							}
						});
					}).toPromise();
	}
	public async getBannerHomeImagesTestimonies():Promise<Miniatura[]>{
		return this.apiService.get('banner')
					.map(response => response.json())
					.map(response => {
						return response.portfolio.map(section => {
							return {
								image: section.mini.url,
								author: section.author,
								content: section.testimony
							}
						});
					}).toPromise();
	}



	public getHighlightImages():Observable<ImageResponse[]>{
		return this.apiService
				.get('highlights')
				.map(response => response.json())
				.map(response => {
					return response.article.map(article => {
						return {
							image: article.main.url,
							name: article.name,
							place: article.location,
							description: null
						}
					});
				});
	}


	public getInstagramImages_():Promise <ImageResponse[]>{
			//let url = "https://api.instagram.com/v1/users/453683505/?access_token=1938189795.b070b02.1811e2423c574187b8fe7c67a2890f8a";
			let url = "https://www.instagram.com/mamfotografo/?__a=1";
			return this.apiService
					.get(url, true)
					.map(response => response.json())
					.map(response => {
						return response.user.media.nodes.map(element => {
							let n = element.thumbnail_resources.length;
							return {
								image: element.thumbnail_resources[ n == 0 ? 0 : n - 1 ].src,
								description: element.caption,
								name: null,
								place: null
							};
						});
					}).toPromise();
	}
}
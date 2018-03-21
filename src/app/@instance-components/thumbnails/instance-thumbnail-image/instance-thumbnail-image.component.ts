/*tslint:disable*/
/**
 * Global components
 */
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ThumbImage } from '@mam/interfaces';
import { ImageResponse } from '@mam/responses';


@Component({
	selector: 'mam-instance-thumbnail-image',
	templateUrl: './instance-thumbnail-image.component.html',
	styleUrls: ['./instance-thumbnail-image.component.scss']
})
export class InstanceThumbnailImageComponent implements OnInit, OnChanges {
	@Input('image') public image:ImageResponse;
	@Input('position') public position:number;
	@Output('onClick') public onClick:EventEmitter<any> = new EventEmitter<any>();

	public thumb_Image:ThumbImage;
	private options:string[] = ['full', 'right', 'left', 'right'];
	constructor() { }

	ngOnInit() { this.parse(); }
	ngOnChanges() { this.parse(); }

	/**
	 * Actions
	 */
	private parse():void{
		this.thumb_Image = {
			alt: this.image.name,
			src: this.image.image,
			position: this.options[this.position % 4],
			place: this.image.place
		};
	}
}

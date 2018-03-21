/**
 * Global imports
 */
import { 
	Component, 
	OnInit,
	Input } from '@angular/core';

/**
 * local imports
 */
import { ImageResponse } from '@mam/responses';

declare const $:any;

/**
 * Component description
 */
@Component({
	selector: 'mam-thumbnail-block-image',
	templateUrl: './thumbnail-block-image.component.html',
	styleUrls: ['./thumbnail-block-image.component.scss']
})
export class ThumbnailBlockImageComponent implements OnInit {
	@Input('images') public images:ImageResponse[];
	constructor() { }
	ngOnInit() { 
	}
	public showVelo(index){
		$("body").addClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).fadeIn(600);
	}
	public disposeVelo(index){
		$("body").removeClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).fadeOut(600);
	} 
}

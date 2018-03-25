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
	public slideLength;
	constructor() { }
	ngOnInit() { 
		this.slideLength = this.images.length;
		
	}
	public showVelo(index){
		$("body").addClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).fadeIn(600);
	}
	public disposeVelo(index){
		$("body").removeClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).fadeOut(600);
	}
	public nextSlide(index){
		this.disposeVeloFast(index);
		if(index +1 <= this.slideLength -1){
			this.showVeloFast(index+1);
		}
		else {
			this.showVeloFast(0);
		}	
		
	} 
	public prevSlide(index){
		this.disposeVeloFast(index);
		if(index -1 > 0){
			this.showVeloFast(index-1);
		}
		else {
			this.showVeloFast(this.slideLength-1);
		}	
	}
	
	public showVeloFast(index){
		$("body").addClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).show();
	}
	public disposeVeloFast(index){
		$("body").removeClass("blockScroll");
		$(`.velo-image[data-index="${index}"]`).hide();
	}
}

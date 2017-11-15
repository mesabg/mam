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
	ngOnInit() { }
}

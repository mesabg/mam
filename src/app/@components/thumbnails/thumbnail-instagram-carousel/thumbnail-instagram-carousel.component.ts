/*tslint:disable*/
import { 
	Component, 
	OnInit, 
	Input, 
	ViewEncapsulation,
	Output,
	EventEmitter,
	AfterViewInit,
	ViewChild,
	ElementRef } from '@angular/core';
import { ImageResponse } from '@mam/responses';
declare const $:any;


@Component({
	selector: 'mam-thumbnail-instagram-carousel',
	templateUrl: './thumbnail-instagram-carousel.component.html',
	styleUrls: ['./thumbnail-instagram-carousel.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ThumbnailInstagramCarouselComponent implements OnInit, AfterViewInit {
	@Input('instagram') public resource:ImageResponse;
	@ViewChild('wrapper') public wrapper:ElementRef;
	@Output('afterViewInit') public afterViewInit:EventEmitter<{$target:any}> = new EventEmitter<{$target:any}>();

	constructor() { }
	
	/**
	 * Event detection
	 */
	ngOnInit() { }
	ngAfterViewInit(){
		this.afterViewInit.emit({
			$target: $(this.wrapper.nativeElement).remove()
		});
	}
	public click(){
		window.open( `https://www.instagram.com/p/${this.resource.name}`, '_blank');
	}
}

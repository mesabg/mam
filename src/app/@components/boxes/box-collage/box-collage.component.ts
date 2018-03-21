import { 
	Input, 
	Component, 
	OnInit, 
	AfterViewInit,
	ViewChild,
	ElementRef } from '@angular/core';
import { Collage } from '@mam/interfaces';
declare const $:any;


@Component({
	selector: 'cania-box-collage',
	templateUrl: './box-collage.component.html',
	styleUrls: ['./box-collage.component.scss']
})
export class BoxCollageComponent implements OnInit, AfterViewInit {
	/**
	 * Views
	 */
	@ViewChild('descriptionRender') private descriptionRender:ElementRef;


	@Input('type') public type:number = 0;
	@Input('description') public description:string;


	public collage:Array<Collage> = [
		{
			alt: 'Isabel y Edgar',
			src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516859140/cno1jkensw2wm7a5jylo.png',
			description: 'Et endenem nosam estintibus vellupi dundae.'
		},
		{
			alt: 'Majo y Ale',
			src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858899/vupk2nwkelhj8rftxxup.png'
		},
		{
			alt: 'Image name',
			src: "http://res.cloudinary.com/keystone-demo/image/upload/v1516859206/gsp1pvg4s9v6ntievuhy.png"
		},
		{
			alt: 'Isabel y Edgar',
			src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516859140/cno1jkensw2wm7a5jylo.png'
		},
		{
			alt: 'Mariella y Elrik',
			src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858999/uvod0tz2i8tiglwkwubz.png'
		},
		{
			alt: 'Majo y Ale',
			src: 'http://res.cloudinary.com/keystone-demo/image/upload/v1516858899/vupk2nwkelhj8rftxxup.png'
		},
	];

    
	constructor() { }
	ngOnInit() { }
	ngAfterViewInit() {
		//-- Check if there's no text
		if (this.description === '' || this.description === undefined || this.description === null)
			$(this.descriptionRender.nativeElement).css('display', 'none');
	}
}

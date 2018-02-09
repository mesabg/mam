/*tslint:disable*/
import { 
	Component, 
	OnInit,
	Input,
	ChangeDetectorRef,
	AfterViewInit,
	ElementRef } from '@angular/core';

	import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
	selector: 'mam-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
	@Input('description') public description:string;
	@Input('parseDescription') public parseDescription:SafeHtml;
	//public parseDescription:SafeHtml;
	constructor(private elementRef:ElementRef,private domSanitizer:DomSanitizer, private changeDetector:ChangeDetectorRef) { }

	ngOnInit() {
		//this.parseDescription = this.parse(this.description);
	}
	ngAfterViewInit(){ 
		this.changeDetector.detectChanges();	
	}
	private parse(value:string):SafeHtml{
		return this.domSanitizer.bypassSecurityTrustHtml(value);
	}
}

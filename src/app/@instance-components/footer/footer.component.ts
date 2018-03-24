/*tslint:disable*/
/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local imports
 */
import { MAMApi } from '@mam/api';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Header Instance
 */
@Component({
	selector: 'mam-instance-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
	public description:Promise<string>;
	public parseDescription:SafeHtml;
	constructor(private mamApi:MAMApi,private domSanitizer:DomSanitizer) { }

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
		this.description = this.mamApi.getContactoBrief();
		this.description.then( (data)=> {
			this.parseDescription = this.parse(data);
		})
		.catch((e) => {console.log(e);})
	}
	
	private parse(value:string):SafeHtml{
		return this.domSanitizer.bypassSecurityTrustHtml(value);
	}
}

	

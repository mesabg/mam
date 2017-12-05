/*tslint:disable*/ 
import { Component, OnInit } from '@angular/core';
import { MAMApi } from '@mam/api';
import { Color } from 'app/#enums/color.enum';
import { Aptitud } from 'app/#interfaces/aptitud.interface';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'mam-banner-instance-aptitudes',
	template: `
		<mam-banner-carousel 
			[color]="color" 
			[title]="title" 
			[elements]="elements | async">
		</mam-banner-carousel>
	`,
})
export class BannerInstanceAptitudesComponent implements OnInit {
	public color:Color = Color.WHITE;
	public title:string = "Aptitudes";
	public elements:Observable<Aptitud[]>;
	constructor(private api:MAMApi) { }

	ngOnInit() { }

	private retrieve(){
		this.elements = this.api.getAptitudes();
	}
}

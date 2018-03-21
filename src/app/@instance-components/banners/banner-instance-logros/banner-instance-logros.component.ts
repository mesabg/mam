/*tslint:disable*/ 
import { Component, OnInit } from '@angular/core';
import { MAMApi } from '@mam/api';
import { Color } from 'app/#enums/color.enum';
import { Observable } from 'rxjs';
import { Logro } from 'app/#interfaces/logro.interface';

@Component({
	selector: 'mam-banner-instance-logros',
	template: `
		<mam-banner-carousel [color]="color" [title]="title" [elements]="elements | async"> </mam-banner-carousel>
	`,
})
export class BannerInstanceLogrosComponent implements OnInit {
	public color:Color = Color.GREY;
	public title:string = "Logros";
	public elements:Observable<Logro[]>;
	constructor(private api:MAMApi) { }

	ngOnInit() {
    this.retrieve();
  }

	private retrieve(){
		this.elements = this.api.getLogros();
	}
}

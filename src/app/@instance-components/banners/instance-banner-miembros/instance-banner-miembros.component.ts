/**
 * Global components
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Local imports
 */
import { DirectorioApi } from '@mam/api';
import { DirectorioResponse } from '@mam/responses';


@Component({
	selector: 'mam-instance-banner-miembros',
	templateUrl: './instance-banner-miembros.component.html',
	styleUrls: ['./instance-banner-miembros.component.scss']
})
export class InstanceBannerMiembrosComponent implements OnInit {
	public directorio:Observable<DirectorioResponse[]>;
	public titulo:string = "Miembro de directorios internacionales";

	constructor(private api:DirectorioApi) { }

	/**
	 * Events
	 */
	ngOnInit() {
		this.retrieve();
	}


	/**
	 * Actions
	 */
	private retrieve():void{
		this.directorio = this.api.getLogos();
	}
}

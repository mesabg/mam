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
	template: `<mam-banner-miembros [titulo]="titulo" [directorio]="directorio | async"></mam-banner-miembros>`
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

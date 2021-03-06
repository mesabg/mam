/*tslint:disable*/
/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local modules import (API Rest)
 */
import { ApiModule as MsApiModule } from '@ms/api';

/**
 * API Services
 */
import { ImageApi } from './image.api';
import { DirectorioApi } from './directorio.api';
import { PreguntaApi } from './pregunta.api';
import { MAMApi } from './mam.api';
import { ContactoApi } from './contacto.api';


/**
 * This module contains API Calls (formatted)
 */
@NgModule({
	imports: [
		CommonModule,
		//-- API Module to provide all the services
		MsApiModule
	],
	providers: [
		ImageApi,
		DirectorioApi,
		PreguntaApi,
		MAMApi,
		ContactoApi,
	]
})
export class ApiModule { }

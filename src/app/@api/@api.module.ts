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
import { BannerApi } from './banner.api';

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
		BannerApi
	]
})
export class ApiModule { }

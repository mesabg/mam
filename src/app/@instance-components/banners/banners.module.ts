/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { ApiModule } from '@mam/api';

/**
 * This module conatains the instance banners of the site
 */
@NgModule({
	imports: [
		CommonModule,
		ApiModule
	],
	declarations: []
})
export class BannersModule { }

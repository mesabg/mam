/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { BannersModule } from './banners';
import { ThumbnailsModule } from './thumbnails';
import { AriaModule } from './aria';

/**
 * This module contains all the necesary components of the SPA
 */
@NgModule({
	imports: [
		CommonModule,
		BannersModule,
		ThumbnailsModule,
		AriaModule		
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		AriaModule
	]
})
export class ComponentsModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local modules
 */
import { BannersModule } from './banners';
import { ThumbnailsModule } from './thumbnails';

/**
 * This module contains the main instance components
 */
@NgModule({
	imports: [
		CommonModule,
		BannersModule,
		ThumbnailsModule
	],
	exports: [
		BannersModule,
		ThumbnailsModule
	]
})
export class InstanceComponentsModule { }

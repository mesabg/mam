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
import { HeaderModule } from './header';
import { FooterModule } from './footer';

/**
 * This module contains all the necesary components of the SPA
 */
@NgModule({
	imports: [
		CommonModule,
		BannersModule,
		ThumbnailsModule,
		AriaModule,
		HeaderModule,
		FooterModule
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		AriaModule,
		HeaderModule,
		FooterModule
	]
})
export class ComponentsModule { }

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
 * Local imports
 */
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

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
		ThumbnailsModule,
		FooterComponent,
		HeaderComponent
	],
	declarations: [
		FooterComponent,
		HeaderComponent
	]
})
export class InstanceComponentsModule { }

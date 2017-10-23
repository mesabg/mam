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
 * Local components
 */
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

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
	declarations:[
		HeaderComponent,
		FooterComponent
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		AriaModule,
		HeaderComponent,
		FooterComponent
	]
})
export class ComponentsModule { }

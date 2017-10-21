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
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

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
		AriaModule,
		FooterComponent,
		HeaderComponent
	],
	declarations: [
		FooterComponent, 
		HeaderComponent
	],
})
export class ComponentsModule { }

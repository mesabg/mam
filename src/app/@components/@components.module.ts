/*tslint:disable*/
/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@mam/services';
/**
 * Local imports
 */
import { BannersModule } from './banners';
import { ThumbnailsModule } from './thumbnails';
import { AriaModule } from './aria';
import { BoxesModule } from './boxes';

/**
 * Local components
 */
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { HeaderStickyComponent } from './header-sticky';

/**
 * This module contains all the necesary components of the SPA
 */
@NgModule({
	imports: [
		CommonModule,
		BannersModule,
		ThumbnailsModule,
		AriaModule,
		BoxesModule,
		ServicesModule		
	],
	declarations:[
		HeaderComponent,
		FooterComponent,
		HeaderStickyComponent
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		AriaModule,
		HeaderComponent,
		FooterComponent,
		BoxesModule,
		HeaderStickyComponent
	],
	entryComponents: [
		HeaderComponent
	]
})
export class ComponentsModule { }

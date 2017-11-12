/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * MAM modules
 */
import { ComponentsModule } from '@mam/components';
import { ApiModule } from '@mam/api';

/**
 * Local modules and components
 */
import { BannersModule } from './banners';
import { ThumbnailsModule } from './thumbnails';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { BoxesModule } from './boxes';
import { InstanceHeaderStickyComponent } from './instance-header-sticky';

/**
 * This module contains the main instance components
 */
@NgModule({
	imports: [
		CommonModule,
		BannersModule,
		ThumbnailsModule,
		ComponentsModule,
		ApiModule,
		BoxesModule
	],
	declarations: [	
		HeaderComponent,
		FooterComponent,
		InstanceHeaderStickyComponent,
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		HeaderComponent,
		FooterComponent,
		BoxesModule,
		InstanceHeaderStickyComponent
	]
})
export class InstanceComponentsModule { }

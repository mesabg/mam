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
import { InstanceBoxMenuComponent } from './instance-boxes/instance-box-menu/instance-box-menu.component';
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
		InstanceBoxMenuComponent
	],
	exports: [
		BannersModule,
		ThumbnailsModule,
		HeaderComponent,
		FooterComponent,
		BoxesModule
	]
})
export class InstanceComponentsModule { }

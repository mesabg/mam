/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { ApiModule } from '@mam/api';
import { ComponentsModule } from '@mam/components';
import { InstanceBannerMiembrosComponent } from './instance-banner-miembros';
import { InstanceBannerInstagramComponent } from './instance-banner-instagram';

/**
 * This module conatains the instance banners of the site
 */
@NgModule({
	imports: [
		CommonModule,
		ApiModule,
		ComponentsModule
	],
	declarations: [
		InstanceBannerMiembrosComponent,
		InstanceBannerInstagramComponent
	],
	exports: [
		InstanceBannerMiembrosComponent,
		InstanceBannerInstagramComponent
	]
})
export class BannersModule { }

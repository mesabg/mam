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
import { InstanceBannerMiembrosComponent } from './instance-banner-miembros/instance-banner-miembros.component';

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
		InstanceBannerMiembrosComponent
	],
	exports: [
		InstanceBannerMiembrosComponent
	]
})
export class BannersModule { }

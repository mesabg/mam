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
import { InstanceBannerLogrosComponent } from './instance-banner-logros';
import { InstanceBannerAptitudesComponent } from './instance-banner-aptitudes';


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
		InstanceBannerInstagramComponent,
		InstanceBannerLogrosComponent,
		InstanceBannerAptitudesComponent,
		
	],
	exports: [
		InstanceBannerMiembrosComponent,
		InstanceBannerInstagramComponent,
		InstanceBannerAptitudesComponent,
		InstanceBannerLogrosComponent
	]
})
export class BannersModule { }

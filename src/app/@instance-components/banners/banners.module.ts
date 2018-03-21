/*tslint:disable*/
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
import { BannerInstanceLogrosComponent } from './banner-instance-logros';
import { BannerInstanceAptitudesComponent } from './banner-instance-aptitudes';


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
		BannerInstanceLogrosComponent,
		BannerInstanceAptitudesComponent,
	],
	exports: [
		InstanceBannerMiembrosComponent,
		InstanceBannerInstagramComponent,
		BannerInstanceAptitudesComponent,
		BannerInstanceLogrosComponent
	]
})
export class BannersModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Components imports
 */
import { BannerMiembrosComponent } from './banner-miembros';
import { BannerInstagramComponent } from './banner-instagram';
import { BannerAptitudesComponent } from './banner-aptitudes';
import { BannerLogrosComponent } from './banner-logros';

/**
 * This module contains all the necesary Banners of the SPA
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BannerMiembrosComponent,
		BannerInstagramComponent,
		BannerAptitudesComponent,
		BannerLogrosComponent
	],
	exports: [
		BannerMiembrosComponent,
		BannerInstagramComponent,
		BannerAptitudesComponent,
		BannerLogrosComponent
	]
})
export class BannersModule { }

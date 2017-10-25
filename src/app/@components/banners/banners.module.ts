/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Components imports
 */
import { BannerMiembrosComponent } from './banner-miembros';

/**
 * This module contains all the necesary Banners of the SPA
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BannerMiembrosComponent
	],
	exports: [
		BannerMiembrosComponent
	]
})
export class BannersModule { }

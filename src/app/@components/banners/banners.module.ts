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

/**
 * This module contains all the necesary Banners of the SPA
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BannerMiembrosComponent,
		BannerInstagramComponent
	],
	exports: [
		BannerMiembrosComponent,
		BannerInstagramComponent
	]
})
export class BannersModule { }

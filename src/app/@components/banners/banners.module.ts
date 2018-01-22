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
import { BannerCarouselComponent } from './banner-carousel';

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
		BannerCarouselComponent
	],
	exports: [
		BannerMiembrosComponent,
		BannerInstagramComponent,
		BannerCarouselComponent
	]
})
export class BannersModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailImageComponent } from './thumbnail-image';

/**
 * This module contains all the main thumbnails
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
	ThumbnailImageComponent
	],
	exports: [
		ThumbnailImageComponent
	],
})
export class ThumbnailsModule { }

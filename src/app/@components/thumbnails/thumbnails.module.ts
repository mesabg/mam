/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailImageComponent } from './thumbnail-image';
import { ThumbnailBlockImageComponent } from './thumbnail-block-image';

/**
 * This module contains all the main thumbnails
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ThumbnailImageComponent,
		ThumbnailBlockImageComponent
	],
	exports: [
		ThumbnailImageComponent,
		ThumbnailBlockImageComponent
	],
})
export class ThumbnailsModule { }

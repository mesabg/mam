/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailImageComponent } from './thumbnail-image';
import { ThumbnailBlockImageComponent } from './thumbnail-block-image';
import { ThumbnailInstagramCarouselComponent } from './thumbnail-instagram-carousel';

/**
 * This module contains all the main thumbnails
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ThumbnailImageComponent,
		ThumbnailBlockImageComponent,
		ThumbnailInstagramCarouselComponent
	],
	exports: [
		ThumbnailImageComponent,
		ThumbnailBlockImageComponent,
		ThumbnailInstagramCarouselComponent
	],
	entryComponents: [
		ThumbnailInstagramCarouselComponent,
		ThumbnailBlockImageComponent
	]
})
export class ThumbnailsModule { }

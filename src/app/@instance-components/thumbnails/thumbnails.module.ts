/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { ApiModule } from '@mam/api';
import { InstanceThumbnailImageComponent } from './instance-thumbnail-image';

/**
 * This module conatains the instance thumbnails of the site
 */
@NgModule({
	imports: [
		CommonModule,
		ApiModule
	],
	declarations: [
	InstanceThumbnailImageComponent 
	],
	exports: [
		InstanceThumbnailImageComponent
	],
})
export class ThumbnailsModule { }

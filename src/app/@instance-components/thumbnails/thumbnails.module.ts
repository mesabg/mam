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
import { InstanceThumbnailImageComponent } from './instance-thumbnail-image';
import { InstanceThumbnailBlockImageComponent } from './instance-thumbnail-block-image/instance-thumbnail-block-image.component';

/**
 * This module conatains the instance thumbnails of the site
 */
@NgModule({
	imports: [
		CommonModule,
		ApiModule,
		ComponentsModule
	],
	declarations: [
		InstanceThumbnailImageComponent,
		InstanceThumbnailBlockImageComponent 
	],
	exports: [
		InstanceThumbnailImageComponent
	],
})
export class ThumbnailsModule { }

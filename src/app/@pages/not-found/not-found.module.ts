/**
 * Global imports
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**
 * Page imports
 */
import { NotFoundPage } from './not-found.page';
import { NotFoundRoutingModule } from './not-found.routing';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';
import { ComponentsModule } from '@mam/components';
import { ServicesModule } from '@mam/services';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		NotFoundRoutingModule,
		InstanceComponentsModule,
		ComponentsModule,
		CommonModule,
		ServicesModule
	],
	declarations: [ NotFoundPage ],
	exports: [ NotFoundPage ]
})
export class NotFoundModule { }


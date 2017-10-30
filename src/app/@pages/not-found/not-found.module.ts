/**
 * Global imports
 */
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

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		NotFoundRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ NotFoundPage ]
})
export class NotFoundModule { }


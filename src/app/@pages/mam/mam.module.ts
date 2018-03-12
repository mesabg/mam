/**
 * Global imports
 */
import { NgModule } from '@angular/core';

/**
 * Page imports
 */
import { MamPage } from './mam.page';
import { MamRoutingModule } from './mam.routing';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		MamRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ MamPage ],
	exports: [ MamPage ]
})
export class MamModule { }

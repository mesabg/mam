/**
 * Global imports
 */
import { NgModule } from '@angular/core';

/**
 * Page imports
 */
import { ContactoPage } from './contacto.page';
import { ContactoRoutingModule } from './contacto.routing';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		ContactoRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ ContactoPage ]
})
export class ContactoModule { }

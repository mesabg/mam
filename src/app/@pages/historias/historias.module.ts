/**
 * Global imports
 */
import { NgModule } from '@angular/core';

/**
 * Page import
 */
import { HistoriasPage } from './historias.page';
import { HistoriasRoutingModule } from './historias.routing';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		HistoriasRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ HistoriasPage ],
	exports: [ HistoriasPage ]
})
export class HistoriasModule { }

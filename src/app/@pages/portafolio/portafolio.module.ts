/**
 * Global imports
 */
import { NgModule } from '@angular/core';

/**
 * Page imports
 */
import { PortafolioPage } from './portafolio.page';
import { PortafolioRoutingModule } from './portafolio.routing';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		PortafolioRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ PortafolioPage ],
	exports: [ PortafolioPage ]
})
export class PortafolioModule { }

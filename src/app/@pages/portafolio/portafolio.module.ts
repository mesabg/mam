/**
 * Global imports
 */
import { CommonModule } from '@angular/common';
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
import { ComponentsModule } from '@mam/components';

/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		PortafolioRoutingModule,
		InstanceComponentsModule,
		ComponentsModule,
		CommonModule
	],
	declarations: [ PortafolioPage ],
	exports: [ PortafolioPage ]
})
export class PortafolioModule { }

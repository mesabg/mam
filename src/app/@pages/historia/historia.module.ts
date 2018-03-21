/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Page imports
 */
import { HistoriaPage } from './historia.page';
import { HistoriaRoutingModule } from './historia.routing';


/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';


@NgModule({
	imports: [
		CommonModule,
		HistoriaRoutingModule,
		InstanceComponentsModule
	],
	declarations: [ HistoriaPage ],
	exports: [ HistoriaPage ]
})
export class HistoriaModule { }

/**
 * Global imports
 */
import { CommonModule } from '@angular/common';
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
import { ApiModule } from '@mam/api';
/**
 * Module page declaration
 */
@NgModule({
	imports: [ 
		CommonModule,
		HistoriasRoutingModule,
		ApiModule,
		InstanceComponentsModule
	],
	declarations: [ HistoriasPage ],
	exports: [ HistoriasPage ]
})
export class HistoriasModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';

/**
 * Page imports
 */
import { HomePage } from './home.page';
import { HomeRoutingModule } from './home.routing';

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
		HomeRoutingModule,
		InstanceComponentsModule,
		ApiModule
	],
	declarations: [ HomePage ]
})
export class HomeModule { }

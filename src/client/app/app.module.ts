/**
 * Global imports
 */
import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { BrowserModule, makeStateKey } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';
import { AppRoutingModule } from './app-routing.module';
import { Layout } from './layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
export const REQ_KEY = makeStateKey<string>('req');

@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'mam-spa'}),
		FormsModule,
		HttpModule,
		InstanceComponentsModule,
		AppRoutingModule,
		MatDatepickerModule
	],
	exports: [MatDatepickerModule],
	providers: [],
	bootstrap: [Layout]
})
export class AppModule {
	constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {}
}

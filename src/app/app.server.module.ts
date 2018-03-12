import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Installed separatly
import { ServerModule } from '@angular/platform-server';

import { Layout } from './layout';

@NgModule({
	declarations: [],
	imports: [
		//Make sure the string matches
		BrowserModule.withServerTransition({
			appId: 'mam-spa'
		}),
		ServerModule,
		AppModule
	],
	providers: [],
	bootstrap: [Layout]
})
export class AppServerModule { }
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Installed separatly
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Layout } from './layout';

@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		//Make sure the string matches
		BrowserModule.withServerTransition({
			appId: 'mam-spa'
		}),
		ServerModule,
		AppModule,
		ModuleMapLoaderModule 
	],
	providers: [],
	bootstrap: [Layout]
})
export class AppServerModule { }
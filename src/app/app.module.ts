/**
 * Global imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Local imports
 */
import { AppRoutingModule } from './app-routing.module';
import { Layout } from './layout';

@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [Layout]
})
export class AppModule { }

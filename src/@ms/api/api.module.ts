//-- Global imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

//-- Local Imports
import { ApiService } from './api.service';

//-- Module declaration
@NgModule({
	imports: [
		CommonModule,
		HttpModule
	],
	declarations: [

	],
	providers: [
		ApiService
	]
})

export class ApiModule { }
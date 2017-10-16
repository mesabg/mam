/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Page imports
 */
import { HomePage } from './home.page';

/**
 * Module page declaration
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		HomePage
	]
})
export class HomeModule { }

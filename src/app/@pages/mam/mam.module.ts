/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Page imports
 */
import { MamPage } from './mam.page';

/**
 * Module page declaration
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		MamPage
	]
})
export class MamModule { }

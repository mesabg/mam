/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Page imports
 */
import { PortafolioPage } from './portafolio.page';

/**
 * Module page declaration
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		PortafolioPage
	]
})
export class PortafolioModule { }

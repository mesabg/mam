/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { CTAService } from './cta.service';

/**
 * This module contains every general service of the SPA
 * NOTE: It provides, DO NOT provide in other parts of the code
 */
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [CTAService]
})
export class ServicesModule { }

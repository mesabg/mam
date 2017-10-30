/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { BoxMiniaturaComponent } from './box-miniatura';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		BoxMiniaturaComponent
	],
	exports: [
		BoxMiniaturaComponent
	]
})
export class BoxesModule { }

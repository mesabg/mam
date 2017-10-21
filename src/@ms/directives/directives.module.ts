//-- Global Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//-- Local Imports
import { StopPropagationDirective } from './stop-propagation';

//-- Componets module definition
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
        //-- Directives
        StopPropagationDirective
    ],
	exports: [
		//-- Directives
        StopPropagationDirective
	]
})
export class DirectivesModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AriaBigComponent } from './aria-big';

/**
 * This module contains all the necesary text of the SPA
 */

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AriaBigComponent],
  exports: [
  	AriaBigComponent
  ],
})
export class AriaModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { BoxMiniaturaComponent } from './box-miniatura';
import { BoxMenuComponent } from './box-menu';
import { BoxBioComponent } from './box-bio';
import { BoxPreguntasComponent } from './box-preguntas';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	BoxMiniaturaComponent,
  	BoxMenuComponent,
  	BoxBioComponent,
  	BoxPreguntasComponent
  ],
  exports: [
  	BoxMiniaturaComponent,
    BoxMenuComponent,
    BoxBioComponent,
    BoxPreguntasComponent
  ],

})
export class BoxesModule { }

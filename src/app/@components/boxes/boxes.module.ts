/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Local imports
 */
import { BoxMiniaturaComponent } from './box-miniatura';
import { BoxMenuComponent } from './box-menu';
import { BoxBioComponent } from './box-bio';
import { BoxPreguntasComponent } from './box-preguntas';
import { BoxFormComponent } from './box-form';
//import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
  	BoxMiniaturaComponent,
  	BoxMenuComponent,
  	BoxBioComponent,
  	BoxPreguntasComponent,
  	BoxFormComponent,
   //// MyDatePickerModule
  ],
  exports: [
  	BoxMiniaturaComponent,
    BoxMenuComponent,
    BoxBioComponent,
    BoxPreguntasComponent,
    BoxFormComponent,
    //MyDatePickerModule
  ],

})
export class BoxesModule { }

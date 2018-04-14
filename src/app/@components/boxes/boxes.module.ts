/*
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/*
 * Local imports
 */
import { BoxMiniaturaComponent } from './box-miniatura';
import { BoxMenuComponent } from './box-menu';
import { BoxBioComponent } from './box-bio';
import { BoxPreguntasComponent } from './box-preguntas';
import { BoxFormComponent } from './box-form';
import { BoxTestimonioComponent } from './box-testimonio';
import { BoxHistoriaComponent } from './box-historia';
import { BoxAgradecimientoComponent } from './box-agradecimiento';
import { BoxCollageComponent } from './box-collage';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
      BoxMiniaturaComponent,
      BoxMenuComponent,
      BoxBioComponent,
      BoxPreguntasComponent,
      BoxFormComponent,
      BoxTestimonioComponent,
      BoxHistoriaComponent,
      BoxAgradecimientoComponent,
      BoxCollageComponent,

  ],
  entryComponents:[
    BoxMiniaturaComponent,
    BoxMenuComponent,
    BoxBioComponent,
    BoxPreguntasComponent,
    BoxFormComponent,
    BoxTestimonioComponent,
    BoxHistoriaComponent,
    BoxAgradecimientoComponent,
    BoxCollageComponent
  ],
  exports: [
    BoxMiniaturaComponent,
    BoxMenuComponent,
    BoxBioComponent,
    BoxPreguntasComponent,
    BoxFormComponent,
    BoxTestimonioComponent,
    BoxHistoriaComponent,
    BoxAgradecimientoComponent,
    BoxCollageComponent
  ],

})
export class BoxesModule { }
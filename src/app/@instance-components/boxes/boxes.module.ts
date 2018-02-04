import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';

import { ComponentsModule } from '@mam/components';
import { InstanceBoxBioComponent } from './instance-box-bio';
import { InstanceBoxPreguntasComponent } from './instance-box-preguntas';
import { InstanceBoxFormComponent } from './instance-box-form';
import { InstanceBoxTestimonioComponent } from './instance-box-testimonio';
import { InstanceBoxHistoriaComponent } from './instance-box-historia';
import { InstanceBoxAgradecimientoComponent } from './instance-box-agradecimiento';
import { InstanceBoxCollageComponent } from './instance-box-collage';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent,
  	InstanceBoxMenuComponent,
  	InstanceBoxBioComponent,
  	InstanceBoxPreguntasComponent,
  	InstanceBoxFormComponent,
  	InstanceBoxTestimonioComponent,
  	InstanceBoxHistoriaComponent,
  	InstanceBoxAgradecimientoComponent,
  	InstanceBoxCollageComponent
  ],
  exports: [
	  InstanceBoxMiniaturaComponent,
    InstanceBoxMenuComponent,
    InstanceBoxBioComponent,
    InstanceBoxPreguntasComponent,
    InstanceBoxFormComponent,
    InstanceBoxTestimonioComponent,
    InstanceBoxHistoriaComponent,
    InstanceBoxAgradecimientoComponent,
    InstanceBoxCollageComponent
  ]
})
export class BoxesModule { }

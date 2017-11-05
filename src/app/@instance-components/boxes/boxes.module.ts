import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';

import { ComponentsModule } from '@mam/components';
import { InstanceBoxBioComponent } from './instance-box-bio';
import { InstanceBoxPreguntasComponent } from './instance-box-preguntas';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent,
  	InstanceBoxMenuComponent,
  	InstanceBoxBioComponent,
  	InstanceBoxPreguntasComponent
  ],
  exports: [
	  InstanceBoxMiniaturaComponent,
    InstanceBoxMenuComponent,
    InstanceBoxBioComponent,
    InstanceBoxPreguntasComponent
  ]
})
export class BoxesModule { }

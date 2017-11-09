import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';

import { ComponentsModule } from '@mam/components';
import { InstanceBoxBioComponent } from './instance-box-bio';
import { InstanceBoxPreguntasComponent } from './instance-box-preguntas';
import { InstanceBoxFormComponent } from './instance-box-form';



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
  	InstanceBoxFormComponent
  ],
  exports: [
	  InstanceBoxMiniaturaComponent,
    InstanceBoxMenuComponent,
    InstanceBoxBioComponent,
    InstanceBoxPreguntasComponent,
    InstanceBoxFormComponent
  ]
})
export class BoxesModule { }

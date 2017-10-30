import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@mam/components';
import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura/instance-box-miniatura.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent
  ],
  exports: [
	  InstanceBoxMiniaturaComponent
  ],
})
export class BoxesModule { }

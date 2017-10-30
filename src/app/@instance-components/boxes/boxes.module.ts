import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';

import { ComponentsModule } from '@mam/components';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent,
  	InstanceBoxMenuComponent
  ],
  exports: [
	  InstanceBoxMiniaturaComponent,
    InstanceBoxMenuComponent
  ]
})
export class BoxesModule { }

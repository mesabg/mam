import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent,
  	InstanceBoxMenuComponent
  ],
  exports: [
	InstanceBoxMiniaturaComponent,
  InstanceBoxMenuComponent
  ],
})
export class BoxesModule { }

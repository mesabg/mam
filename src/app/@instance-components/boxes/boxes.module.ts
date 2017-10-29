import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura/instance-box-miniatura.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	InstanceBoxMiniaturaComponent
  ],
  exports: [
	InstanceBoxMiniaturaComponent
  ],
})
export class BoxesModule { }

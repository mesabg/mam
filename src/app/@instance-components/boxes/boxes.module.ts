import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura';
import { InstanceBoxMenuComponent } from './instance-box-menu';
=======

import { ComponentsModule } from '@mam/components';
import { InstanceBoxMiniaturaComponent } from './instance-box-miniatura/instance-box-miniatura.component';
>>>>>>> e6c11b93090b9cc4ecdf098ab3781b9c541df924

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
<<<<<<< HEAD
	InstanceBoxMiniaturaComponent,
  InstanceBoxMenuComponent
=======
	  InstanceBoxMiniaturaComponent
>>>>>>> e6c11b93090b9cc4ecdf098ab3781b9c541df924
  ],
})
export class BoxesModule { }

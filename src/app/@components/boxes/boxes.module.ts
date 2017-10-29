import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxMiniaturaComponent } from './box-miniatura';
import { BoxMenuComponent } from './box-menu/box-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	BoxMiniaturaComponent,
  	BoxMenuComponent
  ],
  exports: [
  	BoxMiniaturaComponent
  ],
})
export class BoxesModule { }

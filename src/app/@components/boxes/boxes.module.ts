/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local imports
 */
import { BoxMiniaturaComponent } from './box-miniatura';
import { BoxMenuComponent } from './box-menu';


@NgModule({
<<<<<<< HEAD
  imports: [
    CommonModule
  ],
  declarations: [
  	BoxMiniaturaComponent,
  	BoxMenuComponent
  ],
  exports: [
  	BoxMiniaturaComponent,
    BoxMenuComponent
  ],
=======
	imports: [
		CommonModule
	],
	declarations: [
		BoxMiniaturaComponent
	],
	exports: [
		BoxMiniaturaComponent
	]
>>>>>>> e6c11b93090b9cc4ecdf098ab3781b9c541df924
})
export class BoxesModule { }

/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { MamPage } from './mam.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: MamPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MamRoutingModule { }
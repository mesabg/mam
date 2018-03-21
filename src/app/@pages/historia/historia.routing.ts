/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { HistoriaPage } from './historia.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: HistoriaPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HistoriaRoutingModule { }
/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { HistoriasPage } from './historias.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: HistoriasPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HistoriasRoutingModule { }
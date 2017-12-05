/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { HistoriaDetallePage } from './historia-detalle.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: HistoriaDetallePage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HistoriaDetalleRoutingModule { }
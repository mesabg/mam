/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { PortafolioPage } from './portafolio.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: PortafolioPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PortafolioRoutingModule { }
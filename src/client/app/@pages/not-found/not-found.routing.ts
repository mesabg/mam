/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { NotFoundPage } from './not-found.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: NotFoundPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NotFoundRoutingModule { }

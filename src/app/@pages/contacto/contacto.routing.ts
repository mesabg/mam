/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Page
 */
import { ContactoPage } from './contacto.page';

//-- Routing
const routes: Routes = [
	{
		path: '',
		component: ContactoPage
	}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContactoRoutingModule { }
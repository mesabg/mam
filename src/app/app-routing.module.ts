/**
 * Global modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//-- Routing
const routes: Routes = [
	{
		path: '',
		loadChildren: './@pages/home/home.module#HomeModule'
	},
	{
		path: 'contacto',
		loadChildren: './@pages/contacto/contacto.module#ContactoModule'
	},
	{
		path: 'historias',
		loadChildren: './@pages/historias/historias.module#HistoriasModule'
	},
	{
		path: 'mam',
		loadChildren: './@pages/mam/mam.module#MamModule'
	},
	{
		path: 'portafolio',
		loadChildren: './@pages/portafolio/portafolio.module#PortafolioModule'
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
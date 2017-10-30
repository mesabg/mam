/**
 * Global modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Module loaders
 */
import { HomeModule } from './@pages/home/home.module';

export function loadHomeModule() {
    return HomeModule;
}

//-- Routing
const routes: Routes = [
	/*{
		path: '',
		loadChildren: loadHomeModule,
	},*/
	/*{
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
	}*/
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: false})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
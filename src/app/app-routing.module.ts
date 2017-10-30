/**
 * Global modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Module loaders
 */
import { HomeModule } from './@pages/home/home.module';
import { ContactoModule } from './@pages/contacto/contacto.module';
import { HistoriasModule } from './@pages/historias/historias.module';
import { MamModule } from './@pages/mam/mam.module';
import { PortafolioModule } from './@pages/portafolio/portafolio.module';
import { NotFoundModule } from './@pages/not-found/not-found.module';

export function homeLoader() { return HomeModule; }
export function contactoLoader() { return ContactoModule; }
export function historiasLoader() { return HistoriasModule; }
export function mamLoader() { return MamModule; }
export function portafolioLoader() { return PortafolioModule; }
export function notFoundLoader() { return NotFoundModule; }

//-- Routing
const routes: Routes = [
	{
		path: '',
		loadChildren: homeLoader
	},
	{
		path: 'contacto',
		loadChildren: contactoLoader
	},
	{
		path: 'historias',
		loadChildren: historiasLoader
	},
	{
		path: 'mam',
		loadChildren: mamLoader
	},
	{
		path: 'portafolio',
		loadChildren: portafolioLoader
	},
	{
		path: '**',
		loadChildren: notFoundLoader
	}
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
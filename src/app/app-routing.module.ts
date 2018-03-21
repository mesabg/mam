/**
 * Global modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

/**
 * Module loaders
 */
 /*
import { HomeModule } from './@pages/home/home.module';
import { ContactoModule } from './@pages/contacto/contacto.module';
import { HistoriasModule } from './@pages/historias/historias.module';
import { HistoriaModule } from './@pages/historia/historia.module';
import { MamModule } from './@pages/mam/mam.module';
import { PortafolioModule } from './@pages/portafolio/portafolio.module';
import { NotFoundModule } from './@pages/not-found/not-found.module';

import { HomePage } from './@pages/home/home.page';
import { ContactoPage } from './@pages/contacto/contacto.page';
import { HistoriasPage } from './@pages/historias/historias.page';
import { HistoriaPage } from './@pages/historia/historia.page';
import { MamPage } from './@pages/mam/mam.page';
import { PortafolioPage } from './@pages/portafolio/portafolio.page';
import { NotFoundPage } from './@pages/not-found/not-found.page';

export function homeLoader() { return HomeModule; }
export function contactoLoader() { return ContactoModule; }
export function historiasLoader() { return HistoriasModule; }
export function mamLoader() { return MamModule; }
export function portafolioLoader() { return PortafolioModule; }
export function notFoundLoader() { return NotFoundModule; }
*/
//-- Routing
/*
const routes: Routes = [
	{
		path: '',
		component: HomePage
	},
	{
		path: 'contacto',
		component: ContactoPage
	},
	{
		path: 'historias',
		component: HistoriasPage
	},
	{
		path: 'historia/:slug',
		component: HistoriaPage
	},
	{
		path: 'mam',
		component: MamPage
	},
	{
		path: 'portafolio',
		component: PortafolioPage
	},
	{
		path: '**',
		component: NotFoundPage
	}
];*/

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
		path: 'historia/:slug',
		loadChildren: './@pages/historia/historia.module#HistoriaModule'
	},
	{
		path: 'mam',
		loadChildren: './@pages/mam/mam.module#MamModule'
	},
	{
		path: 'portafolio',
		loadChildren: './@pages/portafolio/portafolio.module#PortafolioModule'
	},
	{
		path: '**',
		loadChildren: './@pages/not-found/not-found.module#NotFoundModule'
	}
];


@NgModule({
	imports: [
		/*HomeModule,
		ContactoModule,
		HistoriasModule,
		MamModule,
		PortafolioModule,
		NotFoundModule,
		HistoriaModule,*/
		RouterModule.forRoot(routes, {useHash: false})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
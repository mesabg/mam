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
import { HistoriaDetalleModule } from './@pages/historia-detalle/historia-detalle.module';
import { MamModule } from './@pages/mam/mam.module';
import { PortafolioModule } from './@pages/portafolio/portafolio.module';
import { NotFoundModule } from './@pages/not-found/not-found.module';

import { HomePage } from './@pages/home/home.page';
import { ContactoPage } from './@pages/contacto/contacto.page';
import { HistoriasPage } from './@pages/historias/historias.page';
import { HistoriaDetallePage } from './@pages/historia-detalle/historia-detalle.page';
import { MamPage } from './@pages/mam/mam.page';
import { PortafolioPage } from './@pages/portafolio/portafolio.page';
import { NotFoundPage } from './@pages/not-found/not-found.page';

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
		path: 'historia-detalle/:slug',
		component: HistoriaDetallePage
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
];


@NgModule({
	imports: [
		HomeModule,
		ContactoModule,
		HistoriasModule,
		MamModule,
		PortafolioModule,
		NotFoundModule,
		HistoriaDetalleModule,
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
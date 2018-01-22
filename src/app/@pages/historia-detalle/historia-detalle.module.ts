/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Page imports
 */
import { HistoriaDetallePage } from './historia-detalle.page';
import { HistoriaDetalleRoutingModule } from './historia-detalle.routing';


/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';


@NgModule({
  imports: [
    CommonModule,
    HistoriaDetalleRoutingModule,
    InstanceComponentsModule
  ],
  declarations: [HistoriaDetallePage],
  exports: [ HistoriaDetallePage ]
})
export class HistoriaDetalleModule { }

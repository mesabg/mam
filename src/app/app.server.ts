/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

/**
 * Local imports
 */
import { AppModule } from './app.module';
import { Layout } from './layout';

/**
 * Server module definition
 */
@NgModule({
    imports: [
        ServerModule,
        AppModule
    ],
    bootstrap: [Layout]
})
export class AppServer { }
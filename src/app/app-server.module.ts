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

@NgModule({
	imports: [
		AppModule,
		ServerModule
	],
	bootstrap: [ Layout ]
})
export class AppServerModule {}
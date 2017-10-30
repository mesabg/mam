import { enableProdMode } from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic(COMPILER_PROVIDERS).bootstrapModule(AppModule)
	.catch(err => console.log(err));
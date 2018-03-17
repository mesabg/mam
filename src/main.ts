import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppBrowserModule } from './app/app.browser.module';
import { environment } from './environments/environment';
import 'hammerjs';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppBrowserModule)
	.catch(err => console.log(err));
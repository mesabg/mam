import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Layout } from './layout';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule.withServerTransition({
            appId: 'mam-spa'
        }),
        AppModule
    ],
    providers: [],
    bootstrap: [Layout]
})
export class AppBrowserModule { }
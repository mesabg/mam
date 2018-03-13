/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Local imports
 */
import { InstanceComponentsModule } from '@mam/instance-components';
import { AppRoutingModule } from './app-routing.module';
import { Layout } from './layout';

@NgModule({
    declarations: [
        Layout
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InstanceComponentsModule,
        AppRoutingModule
    ],
    exports: [],
    providers: [],
    bootstrap: [Layout]
})
export class AppModule { }
import { SafeHtml } from '@angular/platform-browser';

export interface Logro {
    img:string;
    title:string;
    content:string;
}

export interface LogroSafe{
    img:string;
    title:SafeHtml;
    content:SafeHtml;
}
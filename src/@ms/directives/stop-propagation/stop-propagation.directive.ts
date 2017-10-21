/**
 * Global Imports
 */
import {Directive, HostListener} from "@angular/core";
declare var $:any;

/**
 * Directive definition
 * This directive will make a prevent default event on an element
 */
@Directive({
    selector: "[stop-propagation]"
})
export class StopPropagationDirective{
    @HostListener("click", ["$event"])
    public onClick(event: any): void{
        console.log("In the directive");
        event.stopPropagation();
        event.preventDefault();
    }
}
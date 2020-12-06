import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[click-stop-propagation]"
})
export class ClickStopPropagation {
    /* 
    directive for stop propagation (put the directive on elements that act like filter/notification)
    this will disable the close event if you click inside the element with the directive
    */
    @HostListener("click", ["$event"])
    public onClick(event: any): void {
        event.stopPropagation();
    }
}
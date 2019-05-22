import { Component, OnInit, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/animations';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    animations: [
        trigger('toggleDrawer', [
            state('closed', style({
                transform: 'translateX(0)'
            })),
            state('opened', style({
                transform: 'translateX(80vw)'
            })),
            transition('closed <=> opened', animate(300))
        ])
    ]
})
export class SidenavComponent implements OnInit {

    // TODO: clean CodeNode, refactor, prettyfy

    toggleDrawer: 'opened' | 'closed' = 'closed';

    // binds the animation to the host component
    @HostBinding('@toggleDrawer') get toggleDrawer1(): string {
        return this.toggleDrawer === 'closed' ? 'opened' : 'closed';
    }

    constructor() { }

    ngOnInit(): void {
    }

    // toggle drawer
    toggle(): void {
        this.toggleDrawer = this.toggleDrawer === 'closed' ? 'opened' : 'closed';
    }

    // opens drawer
    open(): void {
        this.toggleDrawer = 'opened';
    }

    // closes drawer
    close(): void {
        this.toggleDrawer = 'closed';
    }

}

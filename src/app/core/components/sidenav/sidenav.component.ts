import { Component, OnInit, HostBinding } from '@angular/core';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group
} from '@angular/animations';
import { CodeNode } from 'source-list-map';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    animations: [
        trigger('toggleDrawer', [
            state('closed', style({
                'background-color': 'pink',
                transform: 'translateX(0)'
            })),
            state('opened', style({
                'background-color': 'cyan',
                transform: 'translateX(80vw)'
            })),
            transition('closed <=> opened', animate(300))
        ])
    ]
})
export class SidenavComponent implements OnInit {

    // TODO: clean CodeNode, refactor, prettyfy

    isOpen: boolean = false;
    toggleDrawer: 'opened' | 'closed' = 'closed';

    @HostBinding('@toggleDrawer') get toggleDrawer1(): string {
        // this.toggle();
        return this.toggleDrawer === 'closed' ? 'opened' : 'closed';
    }

    constructor() { }

    ngOnInit(): void {
    }

    toggle(): void {
        // this.state = this.state === 'closed' ? 'opened' : 'closed';
        this.toggleDrawer = this.toggleDrawer === 'closed' ? 'opened' : 'closed';
    }

    open(): void {
        // this.state = 'opened';
        this.toggleDrawer = 'opened';
    }

    close(): void {
        // this.state = 'closed';
        this.toggleDrawer = 'closed';
    }

}

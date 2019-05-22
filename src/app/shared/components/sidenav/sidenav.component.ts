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
                transform: 'translateX(0)',
                'box-shadow': '0px 3px 6px 1px rgba(0, 0, 0, 0.6)'
            })),
            state('opened', style({
                transform: 'translateX(80vw)'
            })),
            transition('closed <=> opened', animate(300))
        ])
    ]
})
export class SidenavComponent implements OnInit {

    private state: 'opened' | 'closed' = 'closed';

    // binds the animation to the host component
    @HostBinding('@toggleDrawer') get getToggleDrawer(): string {
        return this.state === 'closed' ? 'opened' : 'closed';
    }

    constructor() { }

    ngOnInit(): void {
    }

    // toggle drawer
    toggle(): void {
        this.state = this.state === 'closed' ? 'opened' : 'closed';
    }

    // opens drawer
    open(): void {
        this.state = 'opened';
    }

    // closes drawer
    close(): void {
        this.state = 'closed';
    }

}

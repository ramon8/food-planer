import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

// modules

// components
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
    declarations: [
        SidenavComponent
    ],
    entryComponents: [
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
    ],
    exports: [
        CommonModule,
        TranslateModule,
        SidenavComponent
    ]
})
export class SharedModule { }

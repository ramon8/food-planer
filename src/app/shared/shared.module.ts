import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

// modules

// components

@NgModule({
    declarations: [
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
    ]
})
export class SharedModule { }

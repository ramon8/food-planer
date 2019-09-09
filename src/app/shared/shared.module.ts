import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

// modules

// components
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HidePipe } from '@app/_pipes/hide.pipe';
import { FormConfiguratorComponent } from './form-configurator/form-configurator.component';

@NgModule({
    declarations: [
        SidenavComponent,
        HidePipe,
        FormConfiguratorComponent
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
        SidenavComponent,
        HidePipe,
        FormConfiguratorComponent
    ]
})
export class SharedModule { }

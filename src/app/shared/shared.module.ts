import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        NgbModule,
    ],
    exports: [
        CommonModule,
        TranslateModule,
        SidenavComponent,
        HidePipe,
        FormConfiguratorComponent,
        NgbModule,
    ]
})
export class SharedModule { }

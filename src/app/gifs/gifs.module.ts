import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsComponent } from './gifs.component';
import { SharedModule } from '@app/shared/shared.module';

import { GifDetailComponent } from './components/gif-detail/gif-detail.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';


@NgModule({
    declarations: [
        GifsComponent,
        GifDetailComponent,
        ModalContainerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GifsRoutingModule,
        SharedModule
    ],
    entryComponents: [
        GifDetailComponent
    ],
})
export class GifsModule { }

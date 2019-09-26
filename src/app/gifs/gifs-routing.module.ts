import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifsComponent } from './gifs.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';

const routes: Routes = [
    { path: '', component: GifsComponent },
    { path: ':id', component: ModalContainerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GifsRoutingModule { }

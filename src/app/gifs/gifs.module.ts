import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsRoutingModule } from './gifs-routing.module';
import { GifsComponent } from './gifs.component';


@NgModule({
  declarations: [GifsComponent],
  imports: [
    CommonModule,
    GifsRoutingModule
  ]
})
export class GifsModule { }

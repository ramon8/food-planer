import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CustomReuseStrategy } from './shared/custom-reuse-strategy';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
    ],
    // TODO: not working properly with feature modules and gif modal
    // providers: [
    //     { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
    // ],
    bootstrap: [AppComponent]
})
export class AppModule { }

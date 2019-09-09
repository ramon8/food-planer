import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CustomErrorPageComponent } from './core/components/custom-error-page/custom-error-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
    { path: 'form', loadChildren: './form/form.module#FormModule' },
    { path: '**', component: CustomErrorPageComponent },
    // { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    // { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

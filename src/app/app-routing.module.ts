import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CustomErrorPageComponent } from './core/components/custom-error-page/custom-error-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: './main/main.module#MainModule', data: { key: 'main' } },
    { path: 'form', loadChildren: './form/form.module#FormModule', data: { key: 'form' } },
    { path: 'gifs', loadChildren: './gifs/gifs.module#GifsModule', data: { key: 'gifs' } },
    { path: '**', component: CustomErrorPageComponent, data: { key: 'error' } },
    // { path: 'gifs', loadChildren: () => import('./gifs/gifs.module').then(m => m.GifsModule) },
    // { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    // { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

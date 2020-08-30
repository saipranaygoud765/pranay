import { Routes, RouterModule } from '@angular/router';


import { NgModule } from '@angular/core';
import { VerifyComponent } from './verify/verify.component';
import { RegComponent } from './reg/reg.component';
import { MaggiComponent } from './maggi/maggi.component';
import { NanduComponent } from './nandu/nandu.component';
import { LuckyComponent } from './lucky/lucky.component';
import { TejuComponent } from './teju/teju.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: RegComponent},
 
    { path: 'verify', component: VerifyComponent},
    { path: 'reg',component: RegComponent},
    {path:'maggi',component:MaggiComponent},
    {path:'nandu',component:NanduComponent},
    {path:'lucky',component:LuckyComponent},
    {path:'teju',component:TejuComponent},
      
];


@NgModule({
    exports : [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class RouterModuleClass { }

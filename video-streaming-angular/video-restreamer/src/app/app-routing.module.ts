import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeComponent2} from './components/home2/home.component2';
import {TryUrlComponent} from './components/try-url/try-url.component'


const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'nodejs', component:HomeComponent },

  { path:'python', component:HomeComponent2 },
  
  { path:'try_url', component:TryUrlComponent },
  { path:'**', redirectTo:"/",pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

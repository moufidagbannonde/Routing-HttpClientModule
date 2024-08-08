import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { AboutChildComponent } from './about/about-child/about-child.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'child',
        component: HomeChildComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'child',
        component: AboutChildComponent
      }
    ]
  },
  {
    path: 'user', 
    component: UserComponent
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

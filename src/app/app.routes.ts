import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component'; 

const routes: Routes = [
  { path: '', component: MainComponent }, // Home route
  { path: 'header', component: HeaderComponent }, // Header route
  { path: 'footer', component: FooterComponent }, // Footer route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

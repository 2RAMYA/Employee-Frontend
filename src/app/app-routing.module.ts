import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homePage/homePage.component';
import { FormBoxComponent } from './formBox/formBox.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
   { path: 'home', component: HomepageComponent },
  { path: 'formBox', component: FormBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

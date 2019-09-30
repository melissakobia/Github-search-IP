import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RepositoryComponent } from './repository/repository/repository.component';


const routes: Routes = [
  { path: 'repository', component: RepositoryComponent},
  { path: 'users', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

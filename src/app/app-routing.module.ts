import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssenceListComponent } from './essence-list/essence-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EssenceDetailsComponent } from './essence-details/essence-details.component';

const routes: Routes = [
  { path: 'essences', component: EssenceListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'essence/:id', component: EssenceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { InsComponent } from './pages/ins/ins.component';

const routes: Routes = [
  {path: 'dashboard', component: DashComponent},
  {path: 'insurance', component: InsComponent},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

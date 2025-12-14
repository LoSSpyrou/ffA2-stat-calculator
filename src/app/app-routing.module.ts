import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { StatCalculatorComponent } from './stat-calculator/stat-calculator.component';

const routes: Routes = [
  { path: '', component: StatCalculatorComponent },
  { path: 'test', component: StatCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

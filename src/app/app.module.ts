import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { StatInputComponent } from './components/stat-input/stat-input.component';
import { StatFilterPipe } from './pipes/stat-filter.pipe';
import { StatCalculatorComponent } from './stat-calculator/stat-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    StatCalculatorComponent,
    StatInputComponent,
    StatFilterPipe,
    SideNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StatCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

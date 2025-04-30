import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassangerDashboardComponent } from './shared/components/passanger-dashboard/passanger-dashboard.component';
import { PassangerCardComponent } from './shared/components/passanger-dashboard/passanger-card/passanger-card.component';
import { PassangerCountComponent } from './shared/components/passanger-dashboard/passanger-count/passanger-count.component';
import { PassangerListComponent } from './shared/components/passanger-dashboard/passanger-list/passanger-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PassangerDashboardComponent,
    PassangerCardComponent,
    PassangerCountComponent,
    PassangerListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

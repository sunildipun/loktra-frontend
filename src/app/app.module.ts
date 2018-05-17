import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, MatDialogModule} from '@angular/material';

import { AppComponent, DialogDialog } from './app.component';

// import { ShareButtonModule } from '@ngx-share/button';
import { ShareButtonModule } from 'ngx-sharebuttons';


@NgModule({
  declarations: [
    AppComponent,
    DialogDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,

    HttpClientModule,       // for share counts
    HttpClientJsonpModule,  // for linkedin and tumblr share counts
    ShareButtonModule.forRoot()

  ],
  providers: [],
  entryComponents: [AppComponent, DialogDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

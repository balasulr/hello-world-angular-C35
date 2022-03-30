import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required when want to do two way binding in app.module.ts

import { AppComponent } from './app.component'; // Class where ts is assumed

@NgModule({ // Decorator
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Class

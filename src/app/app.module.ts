import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WizardModule } from './modules/wizard/wizard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

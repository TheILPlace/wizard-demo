import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardMainComponent } from './components/wizard-main/wizard-main.component';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { Step3Component } from './components/step3/step3.component';
import { BaseWizardStepComponent } from './components/base-wizard-step/base-wizard-step.component';

import {ReactiveFormsModule} from '@angular/forms';
import { WizardMessageService } from './services/wizard-message.service';
import { WizardDataService } from './services/wizard-data.service';


@NgModule({
  declarations: [WizardMainComponent, Step1Component, Step2Component, Step3Component, BaseWizardStepComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [WizardMainComponent],
  providers: [WizardMessageService, WizardDataService]
})
export class WizardModule { }

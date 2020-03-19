import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';

@Component({
  selector: 'app-wizard-main',
  templateUrl: './wizard-main.component.html',
  styleUrls: ['./wizard-main.component.css']
})
export class WizardMainComponent implements OnInit {
  @ViewChildren(BaseWizardStepComponent) steps: QueryList<BaseWizardStepComponent>;

  constructor() { }

  currentStep = 1;

  ngOnInit(): void {
  }

  nextStep() {
    if (this.steps.toArray()[this.currentStep - 1].isStepValid()) {
      this.currentStep++;

    }
  }

  prevStep() {
    if (this.steps.toArray()[this.currentStep - 1].isStepValid()) {

    this.currentStep--;
    }
  }

}

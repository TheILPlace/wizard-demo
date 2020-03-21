import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-base-wizard-step',
  template: '',
  styles: []
})
export class BaseWizardStepComponent    {

  stepForm: FormGroup;
  stepNumber: number;

  constructor() {}

  isStepValid(): boolean {
    return true;
  }

  getStepData(): any {
    return {};
  }

  clearStepData(): void {}

}

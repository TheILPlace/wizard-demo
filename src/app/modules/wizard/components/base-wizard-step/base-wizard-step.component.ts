import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-wizard-step',
  templateUrl: './base-wizard-step.component.html',
  styleUrls: ['./base-wizard-step.component.css']
})
export class BaseWizardStepComponent   {

  data: any = {};
  stepForm: FormGroup;

  constructor() {}

  isStepValid(): boolean {
    return true;
  }

}

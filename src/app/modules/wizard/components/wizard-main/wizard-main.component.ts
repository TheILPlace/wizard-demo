import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';
import { WizardDataService } from '../../services/wizard-data.service';

@Component({
  selector: 'app-wizard-main',
  templateUrl: './wizard-main.component.html',
  styleUrls: ['./wizard-main.component.css']
})
export class WizardMainComponent implements OnInit, AfterViewInit {
  @ViewChildren(BaseWizardStepComponent) steps: QueryList<BaseWizardStepComponent>;

  constructor(private wizardDataService: WizardDataService) { }

  currentStep = 1;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // update the entire steps components, in the service.
    // for each access between step components
    this.wizardDataService.setWizardSteps(this.steps);

  }

  nextStep() {
    // if (this.steps.toArray()[this.currentStep - 1].isStepValid()) {
      if (this.wizardDataService.isStepValid(this.currentStep)) {
      this.currentStep++;

    }
  }

  prevStep() {
    // if (this.steps.toArray()[this.currentStep - 1].isStepValid()) {
      if (this.wizardDataService.isStepValid(this.currentStep)) {

    this.currentStep--;
    }
  }

}

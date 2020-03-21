import { Component, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';
import { FormBuilder, Validators } from '@angular/forms';
import { WizardDataService } from '../../services/wizard-data.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [{provide: BaseWizardStepComponent, useExisting: forwardRef(() => Step1Component)}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step1Component extends BaseWizardStepComponent implements OnInit {

  constructor(private fb: FormBuilder, private wizardDataService: WizardDataService) {
    super();
    this.stepNumber = 1;
  }

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  isStepValid(): boolean {
    return this.stepForm.valid;
  }

  getStepData() {
    return this.stepForm.value;
  }

  clearStep2() {
    this.wizardDataService.clearStepData(2);
  }

}

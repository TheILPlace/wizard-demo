import { Component, OnInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [{provide: BaseWizardStepComponent, useExisting: forwardRef(() => Step2Component)}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Step2Component extends BaseWizardStepComponent implements OnInit {


  constructor(private fb: FormBuilder) {
    super();
    this.stepNumber = 2;
  }

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      address: ['', Validators.required]
    });

  }

  isStepValid(): boolean {
    return this.stepForm.valid;
  }

  getStepData() {
    return this.stepForm.value;
  }

  clearStepData() {
    this.stepForm.patchValue({address: null});
  }

}



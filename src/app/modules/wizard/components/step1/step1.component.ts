import { Component, OnInit, forwardRef } from '@angular/core';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
  providers: [{provide: BaseWizardStepComponent, useExisting: forwardRef(() => Step1Component)}]
})
export class Step1Component extends BaseWizardStepComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  isStepValid(): boolean {
    return this.stepForm.valid;
  }

}

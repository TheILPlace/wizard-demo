import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  providers: [{provide: BaseWizardStepComponent, useExisting: forwardRef(() => Step2Component)}]
})
export class Step2Component extends BaseWizardStepComponent implements OnInit {


  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      address: ['', Validators.required]
    });

  }

  isStepValid(): boolean {
    return this.stepForm.valid;
  }

}



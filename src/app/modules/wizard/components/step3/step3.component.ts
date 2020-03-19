import { Component, OnInit, forwardRef } from '@angular/core';
import { BaseWizardStepComponent } from '../base-wizard-step/base-wizard-step.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  providers: [{provide: BaseWizardStepComponent, useExisting: forwardRef(() => Step3Component)}]
})
export class Step3Component extends BaseWizardStepComponent implements OnInit {


  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      phone: ['', Validators.required]
    });

  }

  isStepValid(): boolean {
    return this.stepForm.valid;
  }

}



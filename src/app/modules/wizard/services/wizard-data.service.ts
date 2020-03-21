import { Injectable, QueryList } from '@angular/core';
import { BaseWizardStepComponent } from '../components/base-wizard-step/base-wizard-step.component';

@Injectable()
export class WizardDataService {
    wizardStepComponents = new QueryList<BaseWizardStepComponent>();

    private getStepFromArray(stepNumber: number) {
        return this.wizardStepComponents.toArray()[stepNumber - 1];
    }

    setWizardSteps(steps: QueryList<BaseWizardStepComponent>) {
        this.wizardStepComponents = steps;
    }

    wizardData(stepNo: number) {

    }

    isStepValid(stepNumber: number): boolean {
        return (this.getStepFromArray(stepNumber).isStepValid());
    }

    clearStepData(stepNumber: number) {
        this.getStepFromArray(stepNumber).clearStepData();

    }


}

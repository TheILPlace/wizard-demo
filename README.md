# DochWizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.


all wizard steps should inherit from BaseWizardComponent
in the constuctor, call super(), and set the number of the current step

super();
this.stepNumber = 1;

implement:
isStepValid(): boolean 
getStepData(): any
clearStepData(): void

interaction between steps, should be done via:
1. calling a method on the WizardDataService ! the service holds the QueryList of all the wizard components
2. using the WizardMessageService


please note, that because all steps are OnPush, you might need to call
detectChanes() if you change the value of properties of the wizard component !


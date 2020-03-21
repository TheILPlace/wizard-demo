import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {filter} from 'rxjs/operators';
import { WizardMessage } from '../interfaces/wizard-message';
import { MessageTypes } from '../enums/message-types.enum';

@Injectable()
export class WizardMessageService {
    constructor() {}

    private messages = new BehaviorSubject<WizardMessage>({messageType: MessageTypes.None, payload: null});

    getMessages(messageType: MessageTypes): Observable<WizardMessage> {
        return this.messages.asObservable().pipe(filter(m => m.messageType === messageType));
    }

    postMessage(wizardMessage: WizardMessage) {
        this.messages.next(wizardMessage);
    }


}

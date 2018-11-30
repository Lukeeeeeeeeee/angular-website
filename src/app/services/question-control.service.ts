import { FormControl, Validators, FormGroup } from '@angular/forms';
import { QuestionBase } from './../question-base';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QuestionControlService {
    constructor() {}

    toFormGroup(questions: QuestionBase<any>[]) {
        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required
                ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });

        return new FormGroup(group);
    }
}

import { Directive, Input } from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    Validator,
    ValidatorFn
} from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}

@Directive({
    selector: '[appForbiddenName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ForbiddenValidatorDirective,
            multi: true
        }
    ]
})
export class ForbiddenValidatorDirective implements Validator {
    // tslint:disable-next-line:no-input-rename
    @Input('appForbiddenName') forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        return this.forbiddenName
            ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(
                control
            )
            : null;
    }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

import { UniqueAlterEgoValidator } from './../services/alter-ego.service';
import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[appUniqueAlterEgo]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => UniqueAlterEgoValidator),
            multi: true
        }
    ]
})
export class UniqueAlterEgoValidatorDirective {
    constructor(private validator: UniqueAlterEgoValidator) {}

    validate(control: AbstractControl) {
        this.validator.validate(control);
    }
}

import { Parent } from './parent';
import { forwardRef } from '@angular/core';

export const provideParent = (component: any, parentType?: any) => {
    return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
};

export const provideTheParent = (component: any) => {
    return { provide: Parent, useExisting: forwardRef(() => component) };
};

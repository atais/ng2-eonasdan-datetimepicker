import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateTimePickerDirective } from './datetimepicker.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DateTimePickerDirective
    ],
    exports: [DateTimePickerDirective]
})
export class A2Edatetimepicker {
}
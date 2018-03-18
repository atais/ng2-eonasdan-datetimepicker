import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateTimePickerDirective } from './datetimepicker.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DateTimePickerDirective
    ],
    exports: [DateTimePickerDirective]
})
export class A2Edatetimepicker {
}
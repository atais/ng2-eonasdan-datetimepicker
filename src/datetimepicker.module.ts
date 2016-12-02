import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DateTimePickerDirective} from './datetimepicker.directive';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        DateTimePickerDirective
    ],
    exports: [DateTimePickerDirective]
})
export class A2Edatetimepicker {
}
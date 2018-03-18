import { ElementRef, OnInit, EventEmitter, ChangeDetectorRef, KeyValueDiffers, DoCheck } from '@angular/core';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';
export declare class DateTimePickerDirective implements OnInit, DoCheck {
    private changeDetector;
    protected el: ElementRef;
    private differs;
    _value: moment.Moment;
    options: datetimepicker.SetOptions;
    onChange: EventEmitter<moment.Moment>;
    onClick: EventEmitter<any>;
    datepicker: datetimepicker.Datetimepicker;
    private dpinitialized;
    private dpElement;
    private optionsDiffer;
    private _onChange;
    constructor(changeDetector: ChangeDetectorRef, el: ElementRef, differs: KeyValueDiffers);
    private setDpValue(val);
    ngOnInit(): void;
    ngDoCheck(): void;
    writeValue(value: any): void;
    value: moment.Moment;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
}

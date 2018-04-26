import { ElementRef, OnInit, EventEmitter, ChangeDetectorRef, KeyValueDiffers, DoCheck, OnDestroy } from '@angular/core';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';
export declare class DateTimePickerDirective implements OnInit, OnDestroy, DoCheck {
    private changeDetector;
    protected el: ElementRef;
    private differs;
    _value: moment.Moment;
    private _options;
    options: datetimepicker.SetOptions;
    onClick: EventEmitter<any>;
    datepicker: datetimepicker.Datetimepicker;
    private dpinitialized;
    private dpElement;
    private optionsDiffer;
    private _onChange;
    constructor(changeDetector: ChangeDetectorRef, el: ElementRef, differs: KeyValueDiffers);
    value: moment.Moment;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    private setDpValue(val);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}

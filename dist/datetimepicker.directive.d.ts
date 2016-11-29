/// <reference types="moment" />
import { ElementRef, Renderer, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { SetOptions } from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';
export declare class DateTimePickerDirective implements OnInit, OnChanges {
    date: moment.Moment;
    options: SetOptions;
    onChange: EventEmitter<moment.Moment>;
    onClick: EventEmitter<any>;
    private dpElement;
    constructor(el: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

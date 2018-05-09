import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    EventEmitter,
    Output,
    forwardRef,
    ChangeDetectorRef,
    KeyValueDiffer,
    KeyValueDiffers,
    DoCheck,
    OnDestroy,
    HostListener
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';

@Directive({
    selector: '[a2e-datetimepicker]',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimePickerDirective), multi: true}
    ]
})
export class DateTimePickerDirective implements OnInit, OnDestroy, DoCheck {

    _value: moment.Moment;
    private _options: datetimepicker.SetOptions = {};
    @Input() set options(value) {
      if (value !== null) {
        this._options = value;
      }
    }
    get options(): datetimepicker.SetOptions {
        return this._options;
    }
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
    datepicker: datetimepicker.Datetimepicker;
    private dpinitialized: boolean;

    private dpElement;
    private optionsDiffer: KeyValueDiffer<string, any>;
    private _onTouched: any = () => {
    }
    private _onChange: any = () => {
    }

    constructor(
        private changeDetector: ChangeDetectorRef,
        protected el: ElementRef,
        private differs: KeyValueDiffers
    ) {
        this.dpinitialized = false;
        const $parent = $(el.nativeElement.parentNode);
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }

    @HostListener('blur') onBlur() {
        this._onTouched();
    }

    get value() {
        return this._value || null;
    }

    set value(val) {
        this._value = val;
        this._onChange(val);
        if (val) {
            this._onTouched();
        }
        this.changeDetector.markForCheck();
    }

    writeValue(value) {
        if (!value) {
            this.value = null;
        }
        this.value = value;
        this.setDpValue(value);
    }

    registerOnChange(fn) {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this._onTouched = fn;
    }

    private setDpValue(val) {
        if (!this.dpinitialized) {
            return;
        }
        if (val) {
            this.datepicker.date(this.value);
        } else {
            this.datepicker.clear();
        }
    }
    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.datepicker.disable();
          return;
        }
        this.datepicker.enable();
      }

    ngOnInit(): void {
        this.dpinitialized = true;
        this.dpElement.datetimepicker(this.options);
        this.datepicker = this.dpElement.data('DateTimePicker');
        this.datepicker.date(this.value);

        this.dpElement.on('dp.change', (e) => {
            if (e.date !== this.value) {
                this.value = e.date || null;
            }
        });

        this.dpElement.on('click', () => this.onClick.emit());
        this.optionsDiffer = this.differs.find(this.options).create();
    }

    ngDoCheck() {
        if (this.dpinitialized) {
            const changes = this.optionsDiffer.diff(this.options);
            if (changes) {
                $.map(this.options, (value, key) => {
                    this.datepicker[key](value);
                });
            }
        }
    }

    ngOnDestroy(): void {
        this.datepicker.destroy();
    }

}

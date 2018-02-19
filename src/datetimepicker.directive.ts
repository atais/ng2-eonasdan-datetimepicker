import {
    Directive,
    ElementRef,
    Renderer,
    Input,
    OnInit,
    EventEmitter,
    Output,
    OnChanges,
    SimpleChanges
} from '@angular/core';
declare var $: any;
import {SetOptions} from 'eonasdan-bootstrap-datetimepicker';
import * as moment from 'moment';

@Directive({
    selector: '[a2e-datetimepicker]'
})
export class DateTimePickerDirective implements OnInit, OnChanges {

    @Input() date: moment.Moment;
    @Input() options: SetOptions;

    @Output() onChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

    private dpElement;

    constructor(el: ElementRef, renderer: Renderer) {
        let $parent = $(el.nativeElement.parentNode);
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }

    ngOnInit(): void {
        this.dpElement.datetimepicker(this.options);
        this.dpElement.data('DateTimePicker').date(this.date);

        this.dpElement.on('dp.change', (e) => {
            if (e.date !== this.date) {
                this.date = e.date;
                this.onChange.emit(e.date);
            }
        });

        this.dpElement.on('click', () => this.onClick.emit());
    }

    ngOnChanges(changes: SimpleChanges): void {
        let dpe = this.dpElement.data('DateTimePicker');

        if (!!dpe) {
            if (changes.options) {
                $.map(changes.options.currentValue, (value, key) => {
                    dpe[key](value);
                });
            }

            if (changes.date && changes.date.currentValue !== undefined) {
                dpe.date(changes.date.currentValue);
            } else {
                dpe.date(null);
            }
        }
    }
}

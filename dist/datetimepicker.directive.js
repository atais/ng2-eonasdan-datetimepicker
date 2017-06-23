"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const $ = require("jquery");
const moment = require("moment");
let DateTimePickerDirective = class DateTimePickerDirective {
    constructor(el, renderer) {
        this.onChange = new core_1.EventEmitter();
        this.onClick = new core_1.EventEmitter();
        let $parent = $(el.nativeElement.parentNode);
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }
    ngOnInit() {
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
    ngOnChanges(changes) {
        let dpe = this.dpElement.data('DateTimePicker');
        if (!!dpe) {
            if (changes.options) {
                $.map(changes.options.currentValue, (value, key) => {
                    dpe[key](value);
                });
            }
            if (changes.date && changes.date.currentValue !== undefined) {
                dpe.date(changes.date.currentValue);
            }
            else {
                dpe.date(null);
            }
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DateTimePickerDirective.prototype, "date", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DateTimePickerDirective.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DateTimePickerDirective.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DateTimePickerDirective.prototype, "onClick", void 0);
DateTimePickerDirective = __decorate([
    core_1.Directive({
        selector: '[a2e-datetimepicker]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], DateTimePickerDirective);
exports.DateTimePickerDirective = DateTimePickerDirective;

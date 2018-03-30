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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DateTimePickerDirective = (function () {
    function DateTimePickerDirective(changeDetector, el, differs) {
        this.changeDetector = changeDetector;
        this.el = el;
        this.differs = differs;
        this._options = {};
        this.onClick = new core_1.EventEmitter();
        this.dpinitialized = false;
        this._onChange = function () {
        };
        var $parent = $(el.nativeElement.parentNode);
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }
    DateTimePickerDirective_1 = DateTimePickerDirective;
    Object.defineProperty(DateTimePickerDirective.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            if (value !== null) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerDirective.prototype, "value", {
        get: function () {
            return this._value || null;
        },
        set: function (val) {
            this._value = val;
            this._onChange(val);
            this.changeDetector.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerDirective.prototype.writeValue = function (value) {
        this.value = value;
        this.setDpValue(value);
    };
    DateTimePickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DateTimePickerDirective.prototype.registerOnTouched = function () {
    };
    DateTimePickerDirective.prototype.setDpValue = function (val) {
        if (!this.dpinitialized) {
            return;
        }
        if (val) {
            this.datepicker.date(this.value);
        }
        else {
            this.datepicker.clear();
        }
    };
    DateTimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.dpinitialized = true;
        this.dpElement.datetimepicker(this.options);
        this.datepicker = this.dpElement.data('DateTimePicker');
        this.datepicker.date(this.value);
        this.dpElement.on('dp.change', function (e) {
            if (e.date !== _this.value) {
                _this.value = e.date;
            }
        });
        this.dpElement.on('click', function () { return _this.onClick.emit(); });
        this.optionsDiffer = this.differs.find(this.options).create();
    };
    DateTimePickerDirective.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.dpinitialized) {
            var changes = this.optionsDiffer.diff(this.options);
            if (changes) {
                $.map(this.options, function (value, key) {
                    _this.datepicker[key](value);
                });
            }
        }
    };
    DateTimePickerDirective.prototype.ngOnDestroy = function () {
        this.datepicker.destroy();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DateTimePickerDirective.prototype, "options", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DateTimePickerDirective.prototype, "onClick", void 0);
    DateTimePickerDirective = DateTimePickerDirective_1 = __decorate([
        core_1.Directive({
            selector: '[a2e-datetimepicker]',
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return DateTimePickerDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.ElementRef,
            core_1.KeyValueDiffers])
    ], DateTimePickerDirective);
    return DateTimePickerDirective;
    var DateTimePickerDirective_1;
}());
exports.DateTimePickerDirective = DateTimePickerDirective;

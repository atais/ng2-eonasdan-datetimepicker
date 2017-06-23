"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const datetimepicker_directive_1 = require("./datetimepicker.directive");
let A2Edatetimepicker = class A2Edatetimepicker {
};
A2Edatetimepicker = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
        ],
        declarations: [
            datetimepicker_directive_1.DateTimePickerDirective
        ],
        exports: [datetimepicker_directive_1.DateTimePickerDirective]
    })
], A2Edatetimepicker);
exports.A2Edatetimepicker = A2Edatetimepicker;

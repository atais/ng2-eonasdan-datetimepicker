# ng2-eonasdan-datetimepicker

* A wrapper directive around the [bootstrap-datetimepicker component](http://eonasdan.github.io/bootstrap-datetimepicker/).
* It is a continuation of [angular-eonasdan-datetimepicker](https://github.com/atais/angular-eonasdan-datetimepicker).

Having problems using the wrapper? <br>
Please, post an issue on GitHub and **provide a plunker** with your question.

## Installation

1) Install the directive via bower or npm (or download it manually, as you prefer)
```javascript
npm install ng2-eonasdan-datetimepicker --save
```

2) Add the `DateTimePickerDirective` directive in the module:
```javascript
import {DateTimePickerDirective} from 'ng2-eonasdan-datetimepicker';

@NgModule({
  declarations: [...
    DateTimePickerDirective
  ]
})
export class SomeModule {}
```

3) Start using!

## Examples

* Simple example, with one datetimepicker: http://embed.plnkr.co/bUVVQu/

*I would appreciate any help with making the demo better. I do not know SystemJS well. Comments in code or disabled elements show features I have not managed to port from Angular 1 demos. Thanks*

## Directive usage

Add `a2e-datetimepicker` tag and add the `date` attribute. 

Currently the `a2e-datetimepicker` tag can be added on either `input-group` or the `input` element.

Option #1
```html
<div class="form-group">
<div class="input-group">
  <input class="form-control" 
        a2e-datetimepicker
        [date]="dateTo"
        [options]="a2eOptions"
        (onChange)="dateToChange($event)"
        (onClick)="dateClick()"/>
  <span class="input-group-addon">
    <span class="glyphicon glyphicon-calendar"></span>
  </span>
</div>
</div>
```

Option #2
```html
<div class="form-group">
<div class="input-group"
        a2e-datetimepicker
        [date]="dateTo"
        [options]="a2eOptions"
        (onChange)="dateToChange($event)"
        (onClick)="dateClick()">
  <input class="form-control"/>
  <span class="input-group-addon">
    <span class="glyphicon glyphicon-calendar"></span>
  </span>
</div>
</div>
```


In both cases the directive will work exactly the same. Also triggering the callendar with the icon in `span` will work in both cases. 
**This comes from angular1 version and may be deleted in the future.**

## Parameters

### date

If `date` is `null` or `undefined`, the initial value will not be set!

### options

With `options` attribute you can pass an object containing all the required configuration for your datetimepicker.
All the options available in the original library are supported. Check the list of options on official website: http://eonasdan.github.io/bootstrap-datetimepicker/Options/

```javascript
options = {
    format: "DD.MM.YYYY",
    maxDate: dateTo
};
```

### onChange

An `EventEmitter` providing a new value of date. It is called every time the value of datetimepicker is changed. <br>

Detailed description of event: http://eonasdan.github.io/bootstrap-datetimepicker/Events/#dpchange

### onClick

An `EventEmitter` which gives you information whenever you open or close the datetimepicker.

## Webpack

If you use Webpack it might be required to add

```javascript
import 'eonasdan-bootstrap-datetimepicker';
```

to your `vendor.ts` file.

## [License](https://github.com/atais/ng2-eonasdan-datetimepicker/blob/master/LICENSE)

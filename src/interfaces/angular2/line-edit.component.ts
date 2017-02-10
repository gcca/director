import { Component, Input } from '@angular/core';


let template = `
  <div>
    <label>{{label}}</label>
    <input type="text" value="{{value}}">
  </div>
`;


@Component({ selector: 'line-edit', template})
export class LineEditComponent {

  @Input()
  label: string = '';

  @Input()
  value: string = '';

}

import { Component, Input } from '@angular/core';

import { Director } from '../../domain/model/director/director';


let styles = [`
  :host {
  }
`];


let template = `
  <form>
    <line-edit label="Nombre" [value]="director.fullName"></line-edit>
    <line-edit label="Género" [value]="director.sex"></line-edit>
    <line-edit label="Nacionalidad"
               [value]="director.nationality"></line-edit>
    <line-edit label="Ciudad" [value]="director.city"></line-edit>
    <line-edit label="DOB" [value]="director.dob"></line-edit>
    <line-edit label="Edad" [value]="director.age"></line-edit>
    <line-edit label="Blockbuster"
               [value]="director.blockbusters[0].movieName"></line-edit>
  </form>
`;


@Component({ selector: 'director', template, styles })
export class DirectorComponent {

  @Input()
  director: Director;

}

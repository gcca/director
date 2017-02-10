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
const core_1 = require('@angular/core');
const director_1 = require('../../domain/model/director/director');
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
let DirectorComponent = class DirectorComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', director_1.Director)
], DirectorComponent.prototype, "director", void 0);
DirectorComponent = __decorate([
    core_1.Component({ selector: 'director', template, styles }), 
    __metadata('design:paramtypes', [])
], DirectorComponent);
exports.DirectorComponent = DirectorComponent;
//# sourceMappingURL=director.component.js.map
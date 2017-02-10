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
const director_repository_localstorage_1 = require('../../infrastructure/persistence/localstorage/director.repository.localstorage');
let template = `
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Género</th>
        <th>Nacionalidad</th>
        <th>Ciudad</th>
        <th>DOB</th>
        <th>Edad</th>
        <th>Blockbuster</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let director of directors"
          (click)="selectCurrentDirector(director)">
        <td>{{director.fullName}}</td>
        <td>{{director.sex}}</td>
        <td>{{director.nationality}}</td>
        <td>{{director.city}}</td>
        <td>{{director.dob}}</td>
        <td>{{director.age}}</td>
        <td>{{director.blockbusters[0].movieName}}</td>
      </tr>
    </tbody>
  </table>

  <director *ngIf="currentDirector" [director]="currentDirector"></director>
`;
let DirectorsComponent = class DirectorsComponent {
    ngOnInit() {
        let directorRepository = new director_repository_localstorage_1.DirectorRepositoryLocalstorage();
        directorRepository.findAll().then(directors => this.directors = directors);
    }
    selectCurrentDirector(director) {
        this.currentDirector = director;
    }
};
DirectorsComponent = __decorate([
    core_1.Component({
        selector: 'directors', template
    }), 
    __metadata('design:paramtypes', [])
], DirectorsComponent);
exports.DirectorsComponent = DirectorsComponent;
//# sourceMappingURL=directors.component.js.map
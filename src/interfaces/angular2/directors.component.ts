import { Component, OnInit } from '@angular/core';

import { Director } from '../../domain/model/director/director';
import { DirectorRepository }
  from '../../domain/model/director/director.repository';
import { DirectorRepositoryLocalstorage }
  from '../../infrastructure/persistence/localstorage/director.repository.localstorage';


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


@Component({
  selector: 'directors', template
})
export class DirectorsComponent implements OnInit {

  directors: Director[];
  currentDirector: Director;

  ngOnInit(): void {
    let directorRepository: DirectorRepository =
      new DirectorRepositoryLocalstorage();

    directorRepository.findAll().then(directors => this.directors = directors);
  }

  selectCurrentDirector(director: Director): void {
    this.currentDirector = director;
  }

}

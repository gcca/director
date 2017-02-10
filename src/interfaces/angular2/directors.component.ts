import { Component, OnInit }      from '@angular/core';

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
          routerLink="/director/{{director.fullName}}">
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
`;


@Component({
  selector: 'directors', template
})
export class DirectorsComponent implements OnInit {

  directors: Director[];

  ngOnInit(): void {
    let directorRepository: DirectorRepository =
      new DirectorRepositoryLocalstorage();

    directorRepository.findAll().then(directors => this.directors = directors);
  }

}

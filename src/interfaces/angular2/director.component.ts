import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Director } from '../../domain/model/director/director';
import { DirectorRepository }
  from '../../domain/model/director/director.repository';
import { DirectorRepositoryLocalstorage }
  from '../../infrastructure/persistence/localstorage/director.repository.localstorage';



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
  <button (click)="back()">Volver</button>
`;

// TODO: NullDirector (pattern)
let NullDirector = new Director('', '', '', '', 0, 0, [<any>{}]);


@Component({ selector: 'director', template })
export class DirectorComponent implements OnInit {

  director: Director = NullDirector;

  constructor(private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit(): void {
    let directorRepository: DirectorRepository =
      new DirectorRepositoryLocalstorage();

    this.route.params
      .switchMap((params: Params) => directorRepository
                                       .find(params['fullName']))
      .subscribe(director => this.director = director);
  }

  back(): void {
    this.location.back();
  }

}

import { Director }
  from '../../../domain/model/director/director';
import { Blockbuster }
  from '../../../domain/model/director/blockbuster';
import { DirectorRepository }
  from '../../../domain/model/director/director.repository';


export class DirectorRepositoryLocalstorage implements DirectorRepository {

  findAll(): Promise<Director[]> {
    return Promise.resolve(
      directorDTOs
        .map(dto => new Director(dto.name,
                                 dto.sex,
                                 dto.nationality,
                                 dto.city,
                                 dto.dob,
                                 dto.age,
                                 [new Blockbuster(dto.blockbuster, 1999)]))
    );
  }

  find(directorId: number): Promise<Director> {
    return Promise.resolve(null);
  }

  store(director: Director): Promise<void> {
    return Promise.resolve();
  }

}


let directorDTOs = [
  {
    "name": "Pedro Almodóvar",
    "sex": "M",
    "nationality": "Spanish",
    "city": "Almería",
    "dob": -639535067,
    "age": 66,
    "blockbuster": "Todo sobre mi madre"
  },
  {
    "name": "Giuseppe Tornatore",
    "sex": "M",
    "nationality": "Italian",
    "city": "Bagheria",
    "dob": -429064667,
    "age": 59,
    "blockbuster": "Cinema paradiso"
  },
  {
    "name": "Sofia Coppola",
    "sex": "F",
    "nationality": "American",
    "city": "New York",
    "dob": 43111333,
    "age": 44,
    "blockbuster": "Lost in translation"
  },
  {
    "name": "Luc Besson",
    "sex": "M",
    "nationality": "French",
    "city": "Paris",
    "dob": -340504667,
    "age": 59,
    "blockbuster": "Léon"
  },
  {
    "name": "Alfred Hitchcock",
    "sex": "M",
    "nationality": "British",
    "city": "London",
    "dob": -2221087067,
    "age": "dead",
    "blockbuster": "Psicosis"
  },
  {
    "name": "Lucía Puenzo",
    "sex": "F",
    "nationality": "Argentinian",
    "city": "Buenos Aires",
    "dob": 218071333,
    "age": 38,
    "blockbuster": "Wakolda"
  },
  {
    "name": "Alejandro González Iñárritu",
    "sex": "M",
    "nationality": "Mexican",
    "city": "Mexico DF",
    "dob": -201314267,
    "age": 52,
    "blockbuster": "Birdman"
  }
]

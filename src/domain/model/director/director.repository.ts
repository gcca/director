import { Director } from './director';


export interface DirectorRepository {
  findAll(): Promise<Director[]>;
  find(directorId: number): Promise<Director>;
  store(director: Director): Promise<void>;
}

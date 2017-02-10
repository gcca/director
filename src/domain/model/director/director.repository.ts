import { Director } from './director';


export interface DirectorRepository {
  findAll(): Promise<Director[]>;
  find(fullName: string): Promise<Director>;
  store(director: Director): Promise<void>;
}

import { DirectorRepositoryLocalstorage }
  from './infrastructure/persistence/localstorage/director.repository.localstorage';

export const context = {
  directorRepository: new DirectorRepositoryLocalstorage
};

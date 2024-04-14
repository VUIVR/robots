import type {TStatus, TGenders} from '@ui/components/filters/types';

export type TFilters = {
  name: string;
  status: TStatus | undefined;
  genders: TGenders | undefined;
};

export type TPagination = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ResourceBase = {
  id: number;
  name: string;
  url: string;
  created: string;
};

export type CharacterLocation = {
  name: string;
  url: string;
};

export type TCharacter = ResourceBase & {
  status: TStatus;
  species: string;
  type: string;
  gender: TGenders;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
};

export type TLocation = ResourceBase & {
  type: string;
  dimension: string;
  residents: string[];
};

export type TErrorResponse = {
  error: string;
};

export type Response<T> = {
  info: TPagination;
  results: T[];
};

export type TEpisode = ResourceBase & {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string[];
  created: string;
};

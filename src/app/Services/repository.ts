import type {AxiosResponse} from 'axios';
import {AxiosRequest} from '@app/Utils/HttpClient';
import type {
  Response,
  TCharacter,
  TEpisode,
  TErrorResponse,
  TFilters,
  TLocation
} from '@app/Store/types';

export class Repository {
  public static async getCharacter(id: number) {
    return await AxiosRequest.api
      .get(`/character/${id}`, {})
      .then((resp: AxiosResponse<TCharacter>) => resp.data);
  }

  public static async getEpisode(id: number) {
    return await AxiosRequest.api
      .get(`/episode/${id}`, {})
      .then((resp: AxiosResponse<TEpisode>) => resp.data);
  }

  public static async getLocation(name: string) {
    return await AxiosRequest.api
      .get(`/location`, {
        params: {
          name
        }
      })
      .then((resp: AxiosResponse<Response<TLocation>>) => resp.data);
  }

  public static async getCharacters(page: number, filters: TFilters) {
    return await AxiosRequest.api
      .get('/character', {
        params: {
          page,
          gender: filters.genders ? filters.genders.toLowerCase() : undefined,
          status: filters.status ? filters.status.toLowerCase() : undefined,
          name: filters.name ? filters.name.toLowerCase() : undefined
        }
      })
      .then(
        (resp: AxiosResponse<Response<TCharacter>>) =>  resp.data  )
      .catch((e) => e.response.data)
      .then((resp: TErrorResponse) => resp);
  }
}

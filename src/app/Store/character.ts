import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {TCharacter, TEpisode, TLocation} from '@app/Store/types';
import {Repository} from '@app/Services';
import {UrlHelper} from '@app/Helpers/urlHelper';

export const useCharacterStore = defineStore('characterStore', () => {
  const character = ref<TCharacter>();
  const location = ref<TLocation>();
  const episodes = ref<TEpisode[]>();
  const list = ref<TCharacter[]>();

  async function getCharacter(id: TCharacter['id']) {
    return await Repository.getCharacter(id).then((resp) => {
      character.value = resp;
    });
  }

  async function getLocation() {
    if (!character.value) return;
    return await Repository.getLocation(character.value.location.name).then(
      (resp) => {
        location.value = resp.results[0];
      }
    );
  }

  async function getEpisodesInfo() {
    if (!character.value) return;
    const data = character.value.episode.map((i: string) => {
      return Repository.getEpisode(+UrlHelper.getId(i));
    });
    episodes.value = await Promise.all(data);
  }

  async function getCharacterList() {
    if (!location.value) return;
    const array =
      location.value.residents.length > 10
        ? location.value.residents.splice(-10)
        : location.value.residents;
    const data = array.map((i: string) => {
      return Repository.getCharacter(+UrlHelper.getId(i));
    });
    list.value = await Promise.all(data);
  }

  function $reset() {
    character.value = undefined;
    location.value = undefined;
    episodes.value = undefined;
    list.value = undefined;
  }

  return {
    character,
    list,
    location,
    episodes,
    getCharacter,
    getLocation,
    getEpisodesInfo,
    getCharacterList,
    $reset
  };
});

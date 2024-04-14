import {defineStore} from 'pinia';
import type {TCharacter, TFilters, TPagination, Response, TErrorResponse} from '@app/Store/types';
import {Repository} from '@app/Services';
import {ref, watch} from 'vue';

export const useMainStore = defineStore('mainStore', () => {
  const list = ref<TCharacter[]>();
  const pagination = ref<TPagination>();
  const currentPage = ref(1);
  const filters = ref<TFilters>({
    status: undefined,
    genders: undefined,
    name: ''
  });

  function handleCurrentPage(page: number) {
    currentPage.value = page;
  }

  function handleFilters<K extends keyof TFilters, V extends TFilters[K]>(
    key: K,
    value: V
  ) {
    filters.value[key] = value;
  }

  async function getCharacters() {
    await Repository.getCharacters(currentPage.value, filters.value).then(
      (resp: Response<TCharacter> | TErrorResponse) => {
        if ('results' in resp) {
          list.value = resp.results;
          pagination.value = resp.info;
        } else {
          list.value = [];
          pagination.value = undefined;
        }
      }
    );
  }

  watch(currentPage, async () => {
    await getCharacters();
  });

  watch(
    filters,
    async () => {
      await getCharacters();
      currentPage.value = 1;
    },
    {deep: true}
  );

  return {
    list,
    pagination,
    filters,
    currentPage,
    handleCurrentPage,
    getCharacters,
    handleFilters
  };
});

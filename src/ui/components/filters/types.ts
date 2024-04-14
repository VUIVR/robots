export type TStatus = 'Alive' | 'Dead' | 'Unknown';
export type TStatusTuple = ['Alive', 'Dead', 'Unknown'];

export type TGenders = 'Female' | 'Male' | 'Genderless' | 'Unknown';
export type TGendersTuple = ['Female', 'Male', 'Genderless', 'Unknown'];

export type TFiltersProps = {
  modelValue: {
    name: string;
    genders: TGenders | undefined;
    status: TStatus | undefined;
  };
};

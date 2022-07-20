type ItemInput = {
  user_id: number;
  plafon: number;
  tenor: number;
};

type Item = {
  id?: number;
  user_id: number;
  plafon: number;
  tenor: number;
};

export type {ItemInput, Item};

type Denominators = 'same' | 'different' | 'mixed';

export type FrAdditions = {
  pages: number;
  canHaveWholes: boolean;
  denominatorsType: Denominators;
}

export type FrSubstractions = {
  pages: number;
  canHaveWholes: boolean;
  denominatorsType: Denominators;
}

export type FrMultiplications = {
  pages: number;
  canHaveWholes: boolean;
  denominatorsType: Denominators;
}
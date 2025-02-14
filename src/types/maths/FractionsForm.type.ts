type Denominators = 'same' | 'different' | 'mixed';

export type FrAdditions = {
  pages: number;
  canHaveWholes: boolean;
  denominatorsType: Denominators;
}
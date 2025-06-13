export type Additions = {
  pages: number;
  firstAddendDigits: number;
  secondAddendDigits: number;
  includeDecimals: boolean;
};

export type Substractions = {
  pages: number;
  minuendDigits: number;
  subtrahendDigits: number;
};

export type Multiplications = {
  pages: number;
  multiplicandDigits: number;
  multiplierDigits: number;
};

export type Divisions = {
  pages: number;
  dividendDigits: number;
  divisorDigits: number;
  canHaveRemainder: boolean;
};

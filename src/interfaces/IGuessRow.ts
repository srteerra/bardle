interface IGuessRowHeader {
  label: string;
  key: string;
}

export interface IGuessRow {
  selectedChamps: any[];
  headers: IGuessRowHeader[];
}

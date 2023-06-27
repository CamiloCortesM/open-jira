export interface Entry {
  _id: string;
  desciption: string;
  createAt: number;
  status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';

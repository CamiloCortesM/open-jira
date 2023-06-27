import { Entry } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  entries: Entry[]; //todo: the data type is missing in the array
}

export const EntriesContext = createContext({} as ContextProps);

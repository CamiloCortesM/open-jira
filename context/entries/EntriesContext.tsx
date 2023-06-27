import { createContext } from 'react';

interface ContextProps {
    entries: []; //todo: the data type is missing in the array
}

export const EntriesContext = createContext({} as ContextProps);
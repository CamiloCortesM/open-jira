import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pending: Elit ex exercitation sint nulla minim.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'In Progress: Veniam aliquip aliquip anim nisi in reprehenderit.',
      status: 'in-progress',
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Pending: Magna nisi incididunt adipisicing consequat velit dolor aliquip id deserunt.',
      status: 'finished',
      createAt: Date.now() - 10000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pending',
    };
    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

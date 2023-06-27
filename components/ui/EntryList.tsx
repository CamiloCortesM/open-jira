import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';

export const EntryList = () => {
  return (
    //Todo: here drop
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '3px 5px',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <List
          sx={{
            opacity: 1,
          }}
        >
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};

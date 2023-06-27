import { Entry } from '@/interfaces';
import { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description, createAt } = entry;
  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
      //events drag
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>

        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant="body2">30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

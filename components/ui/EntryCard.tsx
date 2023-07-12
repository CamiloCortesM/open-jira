import { Entry } from '@/interfaces';
import { FC, DragEvent, useContext } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { UIContext } from '@/context/ui';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    startDragging();
    event.dataTransfer.setData('text', entry._id);

    //TODO: update state
  };

  const onDragEnd = () => {
    endDragging();
    //TODO: cancel on drag
  };

  const { description, createdAt } = entry;
  return (
    <Card
      sx={{
        marginBottom: 1,
        opacity: 1,
        zIndex: 9999,
        position: 'relative',
      }}
      draggable
      onDragStart={onDragStart}
      onDragOver={(event) => event.preventDefault()}
      onDragEnd={onDragEnd}
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

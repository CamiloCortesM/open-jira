import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry = () => {
  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1,
      }}
    >
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant="outlined"
      />

      <TextField
        fullWidth
        sx={{
          marginTop: 2,
          marginBottom: 1,
        }}
        placeholder="New entry"
        autoFocus
        multiline
        label="New Entry"
        helperText="Enter the value"
      />
      <Box display="flex" justifyContent="space-between">
        <Button variant="text">Cancel</Button>
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function NativePickers() {
  return (
    
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Start Date"
        type="datetime-local"
        defaultValue="17th Jun'22 09:00 PM"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      <TextField
        id="datetime-local"
        label="End Date"
        type="datetime-local"
        defaultValue="21st Jun'22 11:00 PM"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
   
  );
}
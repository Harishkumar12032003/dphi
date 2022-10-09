import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

export default function IconButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center',textDecoration:'none' }}>
      <Button component=""  textDecoration='none'  startDecorator={<TaskAltRoundedIcon />}>
        Participate Now
      </Button>
      
    </Box>
  );
}
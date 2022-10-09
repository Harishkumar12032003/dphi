import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';


export default function ButtonIcons(props) {
  return (
    <Box >
      <Button size="small" variant="soft" color="success">
        {props.description}
      </Button>
    </Box>
  );
}



import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SelectFieldDemo() {
  return (
    <FormControl sx={{ width: 200 }}>
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
        Level Type
      </FormLabel>
      <Select
        defaultValue="easy"
        componentsProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but MUI Base and Joy UI don't yet.
            'aria-labelledby': 'select-field-demo-label select-field-demo-button',
          },
        }}
      >
        <Option value="easy" color='info'>Easy</Option>
        <Option value="cat" color='grey'>Medium</Option>
        <Option value="fish" color='grey'>Hard</Option>
        
      </Select>
      
    </FormControl>
  );
}
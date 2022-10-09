import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styled from 'styled-components';

const In=styled.div`
    width: 453px;
    height: 41px;
    border: 1px solid #B7B7B7;
    border-radius:13px;
    background:#FFFFFF;
`;

export default function TextFieldComposition(props) {
  return (
    <FormControl>
      <FormLabel>Challenge Name</FormLabel>
      <In>
        <Input placeholder=''
        value={props.data}
        />
      </In>
     
    </FormControl>
  );
}
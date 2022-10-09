import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { color } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function EditAndDelete() {
  return (
    <Stack direction="row" spacing={4}>
          <Button  variant="outlined" endIcon={<DeleteIcon />} color="error">
              Delete 
      </Button>
      <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/edit" onClick={() => {window.location.href="/edit"}}>
        <Button variant="contained" endIcon={<EditIcon />} color="success" >
                Edit
        </Button>
      </Link>
      
    </Stack>
    
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { color } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { deleteObj } from '../dataHandler';

/*in this we have to replace 2 in onclick with id */

export default function EditAndDelete(props) {
  const handleDelete = () => {
    deleteObj(props.data);
    // axios.delete(`http://localhost:9000/employees/${props.data}`)
    //   .then((res) => {
    //     console.log(res);
    //   });
  }

  return (
    <Stack direction="row" spacing={4}>
      <Link to={`/`}>
    <Button  variant="outlined" endIcon={<DeleteIcon />} color="error" onClick={handleDelete}>
        Delete 
    </Button>
    </Link>
    <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to={`/edit/${props.data}`}>
      <Button variant="contained" endIcon={<EditIcon />} color="success" >
              Edit
      </Button>
    </Link>

    </Stack>
 
    );
}
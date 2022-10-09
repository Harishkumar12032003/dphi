import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useSelector,useDispatch } from 'react-redux';
import { updateName } from '../../redux/counter';


export default function SearchBar(props) {

  const {name}=useSelector((state)=>state.counter);

  const dispatch=useDispatch();
  const onSearchTextChange=(e)=>{
      dispatch(updateName(e.target.value))
      console.log(e.target.value)
      console.log({name});
  }



  return (
    <Paper
    component="form"
    sx={{ p: '2px 20px', display: 'flex',  width: 829,ml:0, mt:7,borderRadius:3}}
  >
    <IconButton type="button" sx={{ p: '10px',pl:0 ,ml:0}} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{}}   
        onChange={onSearchTextChange}
      />  
      
    </Paper>
  );
}

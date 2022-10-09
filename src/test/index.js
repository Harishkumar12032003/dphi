import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

export function Test(){
    const handleClick = () =>{
        console.log('here');

        console.log(window.location)
    }
    return(
        <Link to="/route" onClick={handleClick}>go to route</Link>
    );
}

export function Route2(){
    useEffect(() => {
        console.log('useEffect')
    })
    return(
        <div>route2</div>
    )
}
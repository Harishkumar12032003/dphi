import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../../images/assets/icons/logo.png';
import { Link } from 'react-router-dom';

const NavbarContainer=styled.div`
    width:100%;
    height:64px;
    display:flex;
    align-items:center;
    margin-left:89px;
`;

export function Navbar(props){
    return <div>
         <NavbarContainer>
            <Link to="/" onClick={() => {window.location.href="/"}}><img src={LogoImg} alt="logo"/></Link> 
        </NavbarContainer>
    </div>
    
}
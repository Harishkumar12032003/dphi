import React from 'react';
import styled from 'styled-components'

const ButtonWrapper=styled.button`
    color: #003145;
    padding:1px;
    font-size:18px;
    width: 215px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    height: 47px;
    left: 205px;
    top: 489px;
    margin-top:30px;
    background: #FFFFFF;
    border-radius: 10px;
    cursor:pointer;
    transition:all 200ms ease-in-out;

    &:hover{
        background-color:#D8D8D8;
    }

    &:focus{
        outline:none;
    }
`;

export function Buttons(props){
   return  <ButtonWrapper>{props.children}</ButtonWrapper>
}
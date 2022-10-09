import React, { useState,useEffect } from 'react';
import { Navbar } from '../../components/button/navbar';
import { Info } from '../../components/info';
import { Reason } from './reason';
import {TopSection}  from './topSection';
import { Cards } from '../cards';
import { Search } from '../search';
import { HackCard } from '../../components/Hackathons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container=styled.div`
    width:100%;
    overflow:hidden;
`;

export function HomePage(props){

    useEffect(() => {
        console.log('here')
    })

    return <Container>
        <Navbar/>
        <TopSection/>
        <Info/>
        <Reason/>
        <Cards/>
        <Search  />
        <HackCard/>
    </Container>
}
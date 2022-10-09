import React from 'react';
import styled from 'styled-components';

const Head=styled.div`
    width:100%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size:40px;
    line-height: 20px;
    margin-top:80px;
    margin-left:440px;
   margin-bottom:20px;
    text-align: center;
    display:flex;
    display-direction:row;
    align-items:center;
    color: #000000;
`;

const HighLight=styled.div`
    color:#44924C;
    margin-left:15px;
`;


export function Reason(props){
    return <div>
        <Head>
        Why Participate in <HighLight> AI Challenges?</HighLight>
        </Head>
    </div>
}
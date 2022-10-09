import React from 'react';
import styled from 'styled-components'
import RocketImg from '../../images/assets/icons/PicsArt_04-14-04.42 1.svg';
import { Buttons } from '../../components/button';
import { Link } from 'react-router-dom';

const TopSectionContainer=styled.div`
    width:100%;
    height:550px;
    background:#003145;
    background-size:cover;
`;

const TopSectionInnerContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-container:space-evenly;
`;

const StandoutImg=styled.div`
    
    height: 400px;
    width:420px;
    margin-left:150px;

    img{
        width:100%;
        height:100%;
    }
`;

const Title=styled.div`
    font-size:24px;
    line-height:1.7;
`;

const SloganText=styled.div`
    margin-bottom:10px;
    font-family:'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
    color:#FFFFFF;
`;

const SloganText1=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    
    margin-top:2px;
    
    color: #ECECEC;
`;


const Line=styled.div`
    margin-top:-210px;
    margin-left:143px;
    margin-right:62px;
    width: 9.71px;
    height: 115.91px;
    left: 143px;
    top: 188px;
   
    background: #FFCE5C;
`;

const LogoContainer=styled.div`
    display:flex;
    align-items:flex-start;
    flex-direction:column;
`;


export function TopSection(props){
    return <div>
        <TopSectionContainer>
            <TopSectionInnerContainer>
                <Line></Line>
                <LogoContainer>
                  
                <SloganText>
                Accelerate Innovation 
                </SloganText>  
                <SloganText>
                 with Global AI Challenges
                </SloganText>    
                <SloganText1>
                AI Challenges at DPhi simulate real-world problems. It is a
                </SloganText1>
                <SloganText1>
                 great place to put your AI/Data Science skills to test on 
                 </SloganText1>
                 <SloganText1>
                 diverse datasets allowing you to foster learning through 
                 </SloganText1>
                 <SloganText1>
                 competitions.
                </SloganText1>
                {/* <Link to="/#/create">
                    <Buttons>Create Challenge</Buttons>
                </Link> */}
                
                </LogoContainer>
                
            <StandoutImg>
                <img src={RocketImg} alt="rocket image"/>
            </StandoutImg>
            </TopSectionInnerContainer>
        </TopSectionContainer>
    </div>
}
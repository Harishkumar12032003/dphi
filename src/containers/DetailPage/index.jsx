import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/button/navbar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Level from "../../images/assets/icons/Vector.png";
import EditAndDelete from '../../components/searchAndEditbtn';
import { useHistory } from 'react-router-dom';

const Container=styled.div`
    padding-bottom:50px;
`;

const TopContainer=styled.div`
   display:flex;
   flex-direction:column;
    width: 100%;
    height: 419px;
    margin-left: -1px;
    background: #003145;
`;

const TopInnerContainer=styled.div`
   
    margin-top:96px;
    width: 464px;
    height: 40px;
    margin-left: 130px;
    padding:1px;
    text-align:left;
    padding-left:20px;
    background: #FFCE5C;
    border-radius: 5px;


    
`;

const Icons=styled.div`
    margin-left:10px;

`;

const  Title=styled.div`
    width: 818px;
    height: 48px;
    margin-left: -15px;
    margin-top:50px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;


    color: #FFFFFF;

`;

const  Title2=styled.div`
    width: 576px;
    height: 31px;
    margin-left: -15px;
    margin-top:30px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #F8F9FD;
`;

const Box=styled.div`
    width: 102px;
    height: 30px;
    left: 126px;
    top: 354px;
    margin-left: -15px;
    margin-top:20px;
    text-align:center;
    background: #F8F9FD;
    border-radius: 5px;
    justify-content:center;
    padding-top:2px;
`;

const MiddleContainer=styled.div`
    display:flex;
    box-sizing: border-box; 
    width: 100%;
    height: 66px;
    margin-left: -1px;
    background: #FFFFFF;
    border: 0.3px solid #DDE6ED;
    box-shadow: 0px 6px 12px #DDE6ED;
    margin-bottom:50px;
`;

const OverView=styled.div`
    
    width: 10px;
    margin-left: 160px;
    margin-top:25px;
    padding-bottom:7px;
    font-family: 'Inter';
    
    font-weight: 700;
    font-size: 20px;
    line-height: 29px
    display: flex;
    align-items: center;

    color: #000000;

    
`;

const Lines=styled.div`
    width: 125px;
    height: 4px;
    margin-left:-22px;
    background: #44924C;
    border-radius: 20px;
    magin-top:5px;
    padding-bottom:0px;
 `;

const EditAndDeleteBtn=styled.div`
   width:100px;
   height:40px;
    margin-left: 500px;


    background: #44924C;
    border-radius: 10px;
`;

const Description=styled.div`
    margin-top:20px;
    width: 956px;
height: 100px;
margin-left: 140px;
text-align:left;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 28px;

letter-spacing: -0.02em;

color: #64607D;


`;

const Btns=styled.div`
    margin-left:1000px;
    margin-top:15px;
`;

const Margins=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #000000;
    display:flex;
    margin-top:6px;
    margin-left:2px;
`;

const Texts=styled.div`
    margin-left:5px;
    padding-left:5px;
    margin-top:2px;
`;



export function Detail(props){
  

    return<Container>
        <Navbar></Navbar>
        <TopContainer>
            <TopInnerContainer>
                <Icons>
                <Margins>
                    <AccessTimeIcon/>
                    <Texts>
                    Starts on 17th Jun'22 09:00 PM (India Standard Time) 
                    </Texts>
                </Margins>
                 
                </Icons>
               <Title>

               Data Sprint 72 - Butterfly Identification
               </Title>

               <Title2>
               Identify the class to which each butterfly belongs to
               </Title2>
                <Box>
                    <img src={Level} alt="levels"/>  Easy
                </Box>
            </TopInnerContainer>
        </TopContainer>

        <MiddleContainer>
            <OverView>
                OverView
                <Lines></Lines>
            </OverView>
            <Btns>
                <EditAndDelete></EditAndDelete>
            </Btns>
           
    
        </MiddleContainer>

        <Description>
        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
        </Description>
        <Description>
        An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
        </Description>
        <Description>
         Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
        </Description>
    </Container>
}
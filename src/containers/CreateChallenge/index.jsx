import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/button/navbar';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Button from '@mui/joy/Button';
import { FileInputField } from '@react-ui-org/react-ui';
import { SelectField } from '@react-ui-org/react-ui';
import { TextArea } from '@react-ui-org/react-ui';
import NativePickers from '../../components/dateinput';
import SelectBasic from '../../components/select';
import TextFieldComposition from '../../components/textinput';
import ButtonVariants from '../../components/submitbtn';


import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

import CloudIcon from '@mui/icons-material/CloudUploadRounded';

const Head=styled.div`
    width: 100%;
    height: 107px;

    background: #F8F9FD;
    margin-bottom:0px;
`;

const HeadData=styled.div`
    width: 210px;
    height: 29px;
    margin-left:77px;
    padding-top: 41px;

    font-family: 'Inter';
    font-style: normal;
    font-weight:700;
    font-size: 26px;
    line-height: 29px;
    
    color: #000000;
`;

const FormInput=styled.div`
    padding:50px;
    align-items:left;
`;

const Dates=styled.div`
    margin:40px;
`;

const PageContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
`;

const Text=styled.div`
   margin:40px;
`;

const Text2=styled.div`
   margin-left:40px;
   margin-top:5px;
   margin-bottom:30px;
   padding:0px;
   border: 2px solid grey;
   border-radius: 5px;
`;



const Text1=styled.div`
    margin-top:10px;
    margin-left:40px;
    margin-bottom:40px;
`;

const Name=styled.div`
    padding-left:40px;
    padding-bottom:0px;
`;

const Btn=styled.div`
   background:#D8D8D8;
   border-radius:10px;
   width:200px;
   margin-top:10px;
   margin-left:40px;
   color:#666666;
`;



const Btns=styled.div`
   background:#44924C;
   width:160px;
   border-radius:10px;
   margin-top:50px;
   margin-left:40px;
`;

const Text3=styled.div`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;

        color: #666666;
        margin-right:10px;
`;


export function Create(props){
    
    return<PageContainer>
        <Navbar></Navbar>
        <Head>
            <HeadData>
                
                    Challenge Details
                
            </HeadData>
        </Head>

    <FormInput>
        <Text1>
        <TextFieldComposition></TextFieldComposition>
        </Text1>
      
        <Dates>
        <NativePickers></NativePickers>
        </Dates>

        <Name>
            <FormControl>
                <FormLabel>Description</FormLabel>
            </FormControl>
        </Name>
        
         
      
       <Text2>
       <TextArea cols={80} rows={8} />
       </Text2>
      
        
       <Name>
            <FormControl>
                <FormLabel>Image File</FormLabel>
            </FormControl>
        </Name>

        <Btn>
        <Button variant="contained" component="label">
            <Text3>
            Upload 
            </Text3>
            
            <CloudIcon color="disabled"></CloudIcon>
            <input type="file" hidden/>
        </Button>
        </Btn>

        <Text>
            
            <SelectBasic></SelectBasic>
            
        
        </Text>
       
        <Btns>
            <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/" onClick={() => {window.location.href="/"}}>
                <ButtonVariants data="Create Challenge"></ButtonVariants>
            </Link>
        </Btns>
      
    </FormInput>
       
    </PageContainer>

}




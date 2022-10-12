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
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { add } from '../../components/dataHandler';

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
    margin-right:740px;
`;

const PageContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
`;

const Text=styled.div`
   margin:40px;
   width:180px;
`;

const Text2=styled.div`
   margin-left:40px;
   margin-top:5px;
   margin-bottom:0px;
   padding:0px;
   border: 2px solid grey;
   border-radius: 5px;
`;



const Text1=styled.div`
    margin-top:30px;
    margin-right:700px;
    margin-bottom:40px;
`;

const Name=styled.div`
    padding-left:0px;
    padding-bottom:0px;
    margin-right:730px;
`;

const Btn=styled.div`
   background:#D8D8D8;
   border-radius:10px;
   width:50px;
   
   margin-top:10px;
   margin-left:40px;
   color:#666666;
  
`;



const Btns=styled.div`
   background:#44924C;
   width:160px;
   height:35px;
   padding-top:3px;
   border-radius:10px;
   margin-top:50px;
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

const TextAreas=styled.div`
    margin-right:500px;
    margin-bottom:30px;
`;

const Level=styled.div`
    margin-left:40px;
    margin-top:20px;
    width:80px;
`;


export function Create(props){
    
    const{id}=useParams();
    const[title,processTitle]=useState("");
    const[thumbnail,processThumbnail]=useState("");
    const[level,processLevel]=useState("");
    const[time,processTime]=useState("");
    const[message,processMessage]=useState("");
    const[statustime,processStatusTime]=useState("starts on");
    const[status,processStatus]=useState("upcoming");
    const[unit,processUnit]=useState("date");
  
    // const getHackInfo=()=>{
        
       
    //   const url="http://localhost:9000/employees/";

    //   axios.post(url).then(response=>{
    //     processLevel(response.data.level);
    //     processThumbnail(response.data.thumbnail);
    //     processTime(response.data.time);
    //     processTitle(response.data.title);
    //     processStatusTime(response.data.time>time?"starts on":"ended on");
    //     processStatus("upcoming");
    //     processUnit("days");
    //   }, {
       
    //   })
    // }
  
    // useEffect(()=>{
    //   getHackInfo();
    // },[true])
  
    const updateHack=()=>{
        let currentDate = new Date();
        let time1 = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      var hackInfo={
        "title":title,
        "level":level,
        "thumbnail":thumbnail,
        "time":time,
        "status":time1<time?"upcoming":"past",
        "unit":"date             time",
        "statustime":status=="upcoming"?"starts on":"ended on"
      };
    add(hackInfo); 
    //   const url="http://localhost:9000/employees/";
    //   axios.post(url,hackInfo).then(response=>{
    //     processMessage((title+"details updated"));
    //   })
  
    }

    return<PageContainer>
    <Navbar></Navbar>
    <Head>
        <HeadData>   
            Challenge Details  
        </HeadData>
    </Head>

    <FormInput>
        <Text1>
          <Text>
          <label for="fname">Challenge Details</label>
          <br></br>
            <input
            width="60"
            type="text" className='inputbox'
            value={title}
            onChange={obj=>processTitle(obj.target.value)}/>

        </Text>
        </Text1>
        <Dates>
        
          <label >Start Date:</label>
          <br></br>
          <input type="datetime-local" onChange={obj=>processTime(obj.target.value)}></input>
          <br></br>
          <br></br>
          <label >End Date:</label>
          
          <br></br>
          <input type="datetime-local"></input>
        </Dates>

        <TextAreas>
        <p><label>Description</label></p>

        <textarea id="w3review" rows="4" cols="50">
        
        </textarea>
        </TextAreas>
      

       <Name>
            <label  >Image:</label> 
            <label>url of the image</label>  
        </Name>

        <Btn>
        
            <Text3>
            <input type="url" id="thumbnail" name="thumbnail" onChange={obj=>processThumbnail(obj.target.value)}></input>
            </Text3>  
       
        </Btn>

        <Level>
            <label >Level</label>
            <br></br>
            <select name="level" id="level" value={level} onChange={obj=>processLevel(obj.target.value)} >
              <option value="easy" >Easy</option>
              <option value="medium" >Medium</option>
              <option value="hard" >Hard</option>
            </select>
        </Level>

        <Text>
            <Btns>
                <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/dphi">
               
                
            <button onClick={updateHack} style={{backgroundColor:'#44924C',border:"none"}}>submit</button>
        
                </Link>
            </Btns>
        </Text>

     
        

    </FormInput>    
    </PageContainer>

}

/*

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


<PageContainer>
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
            <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/">
                <ButtonVariants data="Create Challenge"></ButtonVariants>
            </Link>
        </Btns>
      
    </FormInput>
       
    </PageContainer>
    */




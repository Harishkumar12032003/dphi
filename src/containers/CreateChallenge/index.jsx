import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/button/navbar';
import { Link, useNavigate } from 'react-router-dom';
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

import ImageUploading from 'react-images-uploading';
import { width } from '@mui/system';

// const Head=styled.div`
//     width: 100%;
//     height: 107px;

//     background: #F8F9FD;
//     margin-bottom:0px;
// `;

// const HeadData=styled.div`
//     width: 210px;
//     height: 29px;
//     margin-left:77px;
//     padding-top: 41px;

//     font-family: 'Inter';
//     font-style: normal;
//     font-weight:700;
//     font-size: 26px;
//     line-height: 29px;
    
//     color: #000000;
// `;

// const FormInput=styled.div`
//     padding:50px;
//     align-items:left;
// `;

// const Dates=styled.div`
//     margin:40px;
//     margin-right:740px;
// `;

// const PageContainer=styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:flex-start;
    
// `;

// const Text=styled.div`
//    margin:40px;
//    width:180px;
// `;

// const Text2=styled.div`
//    margin-left:40px;
//    margin-top:5px;
//    margin-bottom:0px;
//    padding:0px;
//    border: 2px solid grey;
//    border-radius: 5px;
// `;



// const Text1=styled.div`
//     margin-top:30px;
//     margin-right:700px;
//     margin-bottom:40px;
// `;

// const Name=styled.div`
//     padding-left:0px;
//     padding-bottom:0px;
//     margin-right:730px;
// `;

// const Btn=styled.div`
 
//    border-radius:10px;
//    width:50px;
   
//    margin-top:10px;
//    margin-left:40px;
//    color:#666666;
  
// `;



// const Btns=styled.div`
//    background:#44924C;
//    width:160px;
//    height:35px;
//    padding-top:3px;
//    border-radius:10px;
//    margin-top:50px;
// `;

// const Text3=styled.div`
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 22px;
//     color: #666666;
//     margin-right:10px;
//     width:150px;
// `;



// const TextAreas=styled.div`
//     margin-right:500px;
//     margin-bottom:30px;
// `;

// const Level=styled.div`
//     margin-left:40px;
//     margin-top:20px;
//     width:80px;
// `;

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
    padding-top:100px;
    padding:15px;
    padding-bottom:100px;
    align-items:left;
`;

const Dates=styled.div`
    
    margin-right:740px;
`;

const PageContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    
`;

const Text=styled.div`
 margin-left:40px;
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
    
    margin-right:700px;
    margin-bottom:40px;
`;

const Name=styled.div`
    padding-left:0px;
    padding-bottom:0px;
    margin-right:730px;
`;

const Btn=styled.div`
   
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
   margin-left:30px;
`;

const Text3=styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-right:10px;
    width:150px;
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
    const[description,processDescription]=useState("");
    const[start_date,processStartDate]=useState("");
    const[end_date,processEndDate]=useState("");
    const[images, setImages] = React.useState([]);
    const[show,setShow]=useState("");
    const maxNumber = 1;


  

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        //console.log('here')
        //console.log(imageList, addUpdateIndex);
        //console.log(imageList[0]["data_url"])
        processThumbnail(imageList[0]["data_url"]);
        setImages(imageList);
    };
    let navigate = useNavigate()
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
  
    const updateHack=(e)=>{
        e.preventDefault()
        let time1 = Date.parse(new Date());
      var hackInfo={
        "title":title,
        "level":level,
        "thumbnail":thumbnail,
        "time":time,
        "status":time1>Date.parse(end_date)?"past":time1>Date.parse(start_date)?"active":"upcoming",
        "unit":"date             time",
        "statustime":status=="upcoming"?"starts on":"ended on",
        "description":description,
        "start_date":start_date,
        "end_date":end_date
      };
    add(hackInfo); 
    //   const url="http://localhost:9000/employees/";
    //   axios.post(url,hackInfo).then(response=>{
    //     processMessage((title+"details updated"));
    //   })
    navigate('/')
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
          <label for="fname" style={{marginRight:"280px",marginTop:"28px",marginBottom:"15px",color:"#000000",fontWeight:"500",width:"150px"}}>Challenge Name</label>
          <br></br>
            <input
            width="60"
           
            size="50"
            type="text" className='inputbox'
            value={title}
            onChange={obj=>processTitle(obj.target.value)} required/>

        </Text>
        </Text1>
        <Dates>
        
          <label style={{marginRight:"250px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>Start Date:</label>
          <br></br>
          <input type="date" value={start_date} onChange={obj=>processStartDate(obj.target.value)} style={{marginLeft:"75px",width:"400px"}} required></input>
          <br></br>
          <br></br>
          <label style={{marginRight:"250px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>End Date:</label>
          
          <br></br>
          <input type="date" value={end_date} onChange={obj=>processEndDate(obj.target.value) } style={{marginLeft:"75px",width:"400px"}} required></input>
        </Dates>

        <TextAreas>
        <p><label style={{marginRight:"480px",marginBottom:"0px",marginTop:"20px",color:" #333333",fontWeight:"500"}}>Description</label></p>

        <textarea 
         style={{marginLeft:"50px",marginBottom:"0px"}}
         rows="8" cols="80"
        value={description}
        onChange={obj=>processDescription(obj.target.value)}
        required
        >
        
        </textarea>
        </TextAreas>
      

       <Name>
            <label style={{marginRight:"280px",marginBottom:"15px",color:" #333333",fontWeight:"500"}} >Image:</label> 
        </Name>

        <Btn>
        
            <Text3 style={{marginLeft:"10px",marginBottom:"15px",size:"60"}}>
            
            
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"  
            >
                {({imageList,onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps,}) => (
                // write your building UI
                <div className="upload__image-wrapper">
                    <button 
                    style={{width:"190px",marginLeft:"30px",justifyContent:"space-between",border:"1px solid black",borderRadius:"8px",paddingBottom:"4px",paddingTop:"1px"}}
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                    Upload <CloudIcon ></CloudIcon>
                    </button>
                    {imageList.map((image, index) => (
                        
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            
                            <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>Update</button>
                            <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
            ))}
                </div>
        )}
      </ImageUploading>
     
            </Text3>  
       
        </Btn>

        <Level>
            <label style={{marginLeft:"30px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>Level</label>
            <br></br>
            <select value={level} onChange={obj=>processLevel(obj.target.value)} style={{marginLeft:"35px",marginBottom:"15px",width:"200px",height:"35px"}} required>
              <option value="easy" >Easy</option>
              <option value="medium" >Medium</option>
              <option value="hard" >Hard</option>
            </select>
        </Level>

        <Text>
            <Btns>
                {/* <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/"> */}
               
                
            {/* <button onClick={updateHack}style={{backgroundColor:'#44924C',border:"none"}}>submit</button> */}
                
            <button type="submit" onClick={updateHack} style={{backgroundColor:'#44924C',border:"none"}}  disabled={(title===''?true:false)||(description===''?true:false)||(thumbnail===''?true:false)||(start_date===''?true:false)||(end_date===''?true:false)}>submit</button>

                {/* </Link> */}
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




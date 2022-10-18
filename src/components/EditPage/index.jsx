import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/button/navbar';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';
import { TextArea } from '@react-ui-org/react-ui';
import NativePickers from '../../components/dateinput';
import SelectBasic from '../../components/select';
import TextFieldComposition from '../../components/textinput';
import ButtonVariants from '../../components/submitbtn';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { edit, getIdData } from '../dataHandler';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import ImageUploading from 'react-images-uploading';
import CloudIcon from '@mui/icons-material/CloudUploadRounded';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

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

export function Edit(props){
   
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
  const[start_date,processStartDate]=useState();
  const[end_date,processEndDate]=useState();
  const[images, setImages] = React.useState([]);
  
  
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        // console.log(imageList, addUpdateIndex);
        // setImages(imageList);
        processThumbnail(imageList[0]["data_url"]);
        setImages(imageList);
    };
    let navigate = useNavigate()

  const getHackInfo=()=>{
      
     
    //const url="http://localhost:9000/employees/"  + id;
    const data = getIdData(id);
    console.log(data)
    
    // axios.get(url).then(response=>{
      processLevel(data.level);
      processThumbnail(data.thumbnail);
      processTime(data.time);
      processTitle(data.title);
      processStatusTime(data.time>time?"starts on":"ended on");
      processStatus("upcoming");
      processUnit("days");
      processDescription(data.description);
      processEndDate(data.end_date);
      processStartDate(data.start_date);
    // }, {
     
    // })
  }

  useEffect(()=>{
    getHackInfo();
  },[true])

  const updateHack=(e)=>{
    e.preventDefault()
      let currentDate = new Date();
      let time1 = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var hackInfo={
      "title":title,
      "level":level,
      "thumbnail":thumbnail,
      "time":time,
      "status":time1<time?"past":"upcoming",
      "unit":"date             time",
      "statustime":status=="upcoming"?"starts on":"ended on",
      "description":description,
      "start_date":start_date,
      "end_date":end_date
    };
    edit(hackInfo,id);
    // const url="http://localhost:9000/employees/"+id;
    // axios.put(url,hackInfo).then(response=>{
    //   processMessage((title+"details updated"));
    // })
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
        <label for="fname" style={{marginRight:"280px",marginTop:"28px",marginBottom:"15px",color:"#000000",fontWeight:"500"}}>Challenge Name</label>
        <br></br>
          <input
          width="10"
          size="50"
          type="text" className='inputbox'
          value={title}
          onChange={obj=>processTitle(obj.target.value)}/>

      </Text>
      </Text1>
      <Dates>
      
      <label style={{marginRight:"250px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>Start Date:</label>
          <br></br>
          <input type="date" value={start_date}  onChange={obj=>processStartDate(obj.target.value)} style={{marginLeft:"75px",width:"400px"}} required></input>
          <br></br>
          <br></br>
          <label style={{marginRight:"250px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>End Date:</label>
          
          <br></br>
          <input type="date" value={end_date} onChange={obj=>processEndDate(obj.target.value) }  style={{marginLeft:"75px",width:"400px",marginBottom:"15px"}} required></input>
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
            <label  style={{marginRight:"280px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>Image:</label> 
          
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
                <div className="upload__image-wrapper" style={{textAlign:"center"}}>
                    <button 
                    style={isDragging ? { color: 'red' } : undefined}
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
          <label for="level" style={{marginLeft:"30px",marginBottom:"15px",color:" #333333",fontWeight:"500"}}>Level</label>
          <br></br>
          <select name="level" id="level" value={level} onChange={obj=>processLevel(obj.target.value)}  style={{marginLeft:"35px",marginBottom:"15px",width:"200px",height:"35px"}}>
            <option value="easy" >Easy</option>
            <option value="medium" >Medium</option>
            <option value="hard" >Hard</option>
          </select>
      </Level>

      <Text>
          <Btns>
              {/* <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to="/"> */}
             
            
          <button onClick={updateHack} style={{backgroundColor:'#44924C',border:"none"}}>Save Changes</button>
      
              {/* </Link> */}
          </Btns>
      </Text>

   
      

  </FormInput>    
  </PageContainer>

}


/*
<table>
        <tr>
          <th>title</th>
          <Text1>
          <td>
            <input type="text" className='inputbox'
            value={title}
            onChange={obj=>processTitle(obj.target.value)}/>
          </td>
          </Text1>
        </tr>
        <tr>
        <th>time</th>
        <td>
            <input type="text" className='inputbox'
            value={time}
            onChange={obj=>processTime(obj.target.value)}/>
          </td>
        </tr>
        <tr>
        <th>thumbnail</th>
        <td>
            <input type="text" className='inputbox'
            value={thumbnail}
            onChange={obj=>processThumbnail(obj.target.value)}/>
          </td>
        </tr>
        <tr>
        <th>level</th>
        <td>
            <input type="text" className='inputbox'
            value={level}
            onChange={obj=>processLevel(obj.target.value)}/>
          </td>
        </tr>
        <tr>
       
        
        </tr>
      </table>

*/


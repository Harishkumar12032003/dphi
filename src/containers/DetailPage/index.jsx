import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/button/navbar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Level from "../../images/assets/icons/Vector.png";
import EditAndDelete from '../../components/searchAndEditbtn';
import { useHistory, useParams } from 'react-router-dom';
import Records from '../../records.json';
import Db from '../../db.json';
import { getData } from '../../components/dataHandler';

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
    width:1000px;
    height: 48px;
    margin-left: -15px;
    margin-top:50px;
    margin-bottom:5px;
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
    const {id} = useParams();
    const [data,setData] = useState();
    
    useEffect(() => {
        for (let key in getData()){
            if(getData()[key].id == id){
                setData(getData()[key]);
                break;
            }
        }
        console.log(data)
    },[]);


    return<Container>
        <Navbar></Navbar>
        {data ? <div>
            <TopContainer>
            <TopInnerContainer>
                <Icons>
                <Margins>
                    <AccessTimeIcon/>
                    <Texts>
                    Starts in {data.time} (India Standard Time) 
                    </Texts>
                </Margins>
                 
                </Icons>
               <Title>
               {data.title}
               </Title>

               <Title2>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </Title2>
                <Box>
                    <img src={Level} alt="levels"/>  {data.level}
                </Box>
            </TopInnerContainer>
        </TopContainer>

        <MiddleContainer>
            <OverView>
                OverView
                <Lines></Lines>
            </OverView>
            <Btns>
                <EditAndDelete data={id}></EditAndDelete>
            </Btns>
           
    
        </MiddleContainer>

        <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, fugiat laudantium suscipit mollitia magni accusamus facilis placeat accusantium sed doloribus dicta odio! Ex voluptatum rem omnis reiciendis illo tempora sunt.
        </Description>
        <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, facere modi. Praesentium animi, consectetur velit, dolorem impedit iusto iure qui ullam provident harum possimus officiis, commodi explicabo adipisci doloribus ducimus!
        </Description>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque reiciendis impedit blanditiis explicabo recusandae, neque voluptate sapiente distinctio vel? Similique, repudiandae. Illum, quis dolor repellat quo ipsa quod officiis?
        </Description>
        </div> : <div>Data not found</div>}
    </Container>
}
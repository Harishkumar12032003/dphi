import React,{useState,useEffect} from "react";
import styled from "styled-components";

import HackImage1 from "../../images/assets/cardimage/Group 1000002466.png";
import ButtonIcons from "../status";
import IconButtons from "../participatebtn";
import { useSelector } from "react-redux";
import Records from "../../records.json";
import Db from "../../db.json";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import { getData } from "../dataHandler";

const Container=styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    display-direction:row;
    background-color:#003145;
    padding-top:70px;
    padding-bottom:120px;
    height:100%;
    justify-content:center;
`;

const CardContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    width: 354px;
    height: 473px;
    margin-left:40px;
    margin-right:40px;
    margin-top: 70px;
    
    background: #FFFFFF;

    box-shadow: 0px 4px 43px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
`;

const Thumbnail=styled.div`

    width: 354px;
    height: 174px;
    img {
        width: 100%;
        height: 100%;
      }

    background: #003145;
`;

const NameOfHack=styled.div`
    width: 246px;
    height: 44px;
    margin-top:10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight:600;
    font-size:16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;

const Status=styled.div`
   margin-top:30px;
   margin-bottom:10px;
   font-size:12px;
   background: rgba(242, 201, 76, 0.25);
   border-radius: 5px;
`;

const Starts=styled.div`
    width: 142px;
    height: 13px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;

    text-align: center;
    margin-top:30px;
    color: #444444;
`;


const TimeUnit=styled.div`
      display:flex;
      flex-direction:row;
      align-items:center;
      margin-top:0px;
      margin-bottom:10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      word-spacing: 20px;
      color: #4F4F4F;
`;

const Participate=styled.div`
      margin-bottom:10px;
      color:#FFFFFF;
      background: #44924C;
      border-radius: 10px;
      margin-top:10px;
      text-decoration:none;
`;

const FilterBtn=styled.div`
      display:flex;
      margin-top:0px;
      height:50px;
      width:100%;
      margin-bottom:50px;
      text-align:center;
      justify-content:center;
`;

const Btn=styled.div`
        margin:10px;
        border-radius:20px;
        font-weight:390;
`;

const FilterButton=styled.div`
      display:flex;
      flex-direction:column;
      width:100px;
      margin:10px;
      border-radius:20px;
      font-weight:390;
`;


export function HackCard(props) {
    const {name}=useSelector((state)=>state.counter);
    
   /* const [items, setItems] = useState(Records);
   Records-->Db.employess
   */
    const [items,setItems]=useState(getData());
    
   const filterItem = (categItem) => {
        const updatedItems = getData().filter((curElem) => {
            return curElem.status === categItem;
        });
    
        setItems(updatedItems);
    }

    const filterItemLevel = (categItem) => {
        const updatedItems =  getData().filter((curElem) => {
            return curElem.level === categItem;
        });
    
        setItems(updatedItems);
    }

    useEffect(()=>{
        const updatedItems =  getData().filter((curElem) => {
          if(curElem.title!=undefined){
            return curElem.title.toLowerCase().includes({name}.name.toLowerCase())
          }
        });
    
        setItems(updatedItems);

    },[name])

  

  return (
    
    <Container>
    <FilterBtn>
            <FilterButton>
            <button className="btn btn-secondary"  onClick={() => setItems(getData())}  >All</button>
            </FilterButton>
            <FilterButton>
            <button className="btn btn-light" onClick={() => filterItem('upcoming')}>Upcoming</button>
            </FilterButton>
            
            <FilterButton>
            <button className="btn btn-light"  onClick={() => filterItem('active')}>Active</button>
            </FilterButton>
            
            <FilterButton>
            <button className="btn btn-light" onClick={() => filterItem('past')}>Past</button>
            </FilterButton>
            <FilterButton>
                <button className="btn btn-light" onClick={() => filterItemLevel('easy')} >Easy</button>
            </FilterButton>
                
            <FilterButton>
                <button className="btn btn-light" onClick={() => filterItemLevel('medium')} >Medium</button>
            </FilterButton>
                
            <FilterButton>
                <button className="btn btn-light" onClick={() => filterItemLevel('hard')} >Hard</button>
            </FilterButton>
    

</FilterBtn>
           
        {
        
        
        items.map((elem) => {
            console.log(elem.title);
              if(elem.title!=undefined) {
                return(
                    <div key={elem.id}>
                        <CardContainer>
                            <Thumbnail>
                            <img src={elem.thumbnail} alt="hackathon1 image" />
                          
                            </Thumbnail>
                            <Status>
                            < ButtonIcons description={elem.status}/>
                            </Status>
                            
                            <NameOfHack>
                            {elem.title}
                            </NameOfHack>

                            <Starts>
                               {elem.statustime}
                            </Starts>
                            <h4 style={{ margin: 3,marginTop:5 ,color:'#454545' }}>{elem.time}</h4>
                            <TimeUnit>{elem.unit}</TimeUnit>

                            <Participate>
                                <Link style={{textDecoration: 'none',color:"#FFFFFF"}} to={`/details/${elem.id}`}> <IconButtons></IconButtons> </Link>
                            </Participate>
                            
                        
                        </CardContainer>
                    </div>
                )}
            })
        }

    </Container>
    
  );
}








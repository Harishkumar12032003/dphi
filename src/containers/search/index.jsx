import React,{useState} from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/searchbar';
import FilterBtn from '../../components/filterbtn';
import { HackCard } from '../../components/Hackathons';


const Container=styled.div`
    width: 100%;
    height: 324px;
    margin-top:125px;

    background: #002A3B;
`;

const Head=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: calc(50% - 353px/2 - 0.5px);
    padding-top:72px;
    color: #FFFFFF;
`;

const SearchBarContainer=styled.div`
    border-radius:100px;
    margin-top:80px;
`;

const Filter=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

const Btn=styled.div`
    margin-top:60px;
    margin-left:20px;
    width:30px;
    background:#FFFFFF;
    height:12px;
    border-radius:10px;
`;

export function Search(props){
 
    

    return <div>
        <Container>
            <Head>
            Explore Challenges 
            </Head>
            <Filter>
           <SearchBar></SearchBar>
           <Btn>
           <div className="dropdown" >
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter
                </button>
                    <div className="dropdown-menu" style={{padding:"10px"}}>
                    <h6 className="dropdown-header">Status</h6>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label">
                        All
                    </label>
                    </div>
 
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" >
                        Upcoming
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" >
                       Active
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" >
                        Past
                    </label>
                    </div>
                    <div className="dropdown-divider"></div>
                    <h6 className="dropdown-header">Level</h6>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" >
                       Easy
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" >
                       Medium
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label">
                        Hard
                    </label>
                    </div>
            </div>
            </div>
           </Btn>
           </Filter>
           
        </Container>
       
    </div>
}








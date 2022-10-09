import React from 'react';
import styled from 'styled-components';
import logo1 from '../../images/assets/icons/Group 1000002515.svg'
import logo2 from '../../images/assets/icons/Group 1000002516.svg'
import logo3 from '../../images/assets/icons/Group 1000002518.svg'
import VerticalDividerText from '../lineseparator';

const InfoContainer=styled.div`
    height:200px;
    width:100%;
    background: #002A3B;
    display:flex;
    flex-direction:row;
    justify-content:space-inbetween;
    align-items:center;
`;

const DescriptionHead=styled.div`
    text-align:left;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    color: #FFFFFF;
    margin-left:10px;
`;

const Description=styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-left:10px;
    color: #FFFFFF;
    margin-top:5px;
`;

const Img=styled.div`
    height:10px;
    margin-left:180px;
    margin-bottom:45px;
`;

const Lines=styled.div`
    margin-left:0px;
    height:10px;
    width:2px;
    margin-bottom:40px;
`;

const InnerContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin-right:110px;
    margin-left:10px;
`;

export function Info(props){
    return <div>
        <InfoContainer>
            
                <Img>
                    <img src={logo1}/>
                </Img>
                
                <InnerContainer>
                    <DescriptionHead>
                        100K+
                    </DescriptionHead>
                    <Description>
                        AI model submissions
                    </Description>
                </InnerContainer>
               
                <Lines>
                    <VerticalDividerText></VerticalDividerText>
               </Lines>
              

                <Img>
                    <img src={logo2}/>
                </Img>
                
                <InnerContainer>
                    <DescriptionHead>
                        50K+
                    </DescriptionHead>
                    <Description>
                        Data Scientists
                    </Description>
                </InnerContainer>
                
                <Lines>
                    <VerticalDividerText></VerticalDividerText>
               </Lines>

                <Img>
                    <img src={logo3}/>
                </Img>
                
                <InnerContainer>
                    <DescriptionHead>
                        100+
                    </DescriptionHead>
                    <Description>
                        AI Challenges hosted
                    </Description>
                </InnerContainer>
                
            
        </InfoContainer>
    </div>
    
}
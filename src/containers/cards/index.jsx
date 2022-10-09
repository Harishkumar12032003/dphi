import React from 'react';
import styled from 'styled-components';
import r1 from '../../images/assets/icons/Vector.svg'
import r2 from '../../images/assets/icons/carbon_notebook-reference.svg'
import r4 from '../../images/assets/icons/IdentificationCard.svg'
import r3 from '../../images/assets/icons/Robot.svg'

const CardsLayout=styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    display-direction:row;
    margin-left:0px;
    margin-right:60px;
    justify-content:center;
`;

const CardContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    overflow:hidden;
    
    height:276px;
    background-color:white;
    
    width: 542px;

    margin-left: 40px;
    margin-right:40px;
    margin-top: 70px;

    background: #F8F9FD;
    border-radius: 20px;
`;

const TopContainer=styled.div`
    width:100%;
`;

const Thumbnail=styled.div`
    width:50px;
    height:40px;
    margin-left:30px;
    margin-top:60px;
    margin-bottom:20px;
    img{
        width:50px;
        height:50px;
    }
`;

const ContentContainer=styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    flex:1;
    align-items:flex-start;
    padding-left:20px;
    padding-right:10px;
`;



const Title=styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
   
    margin-left:5px;
    letter-spacing: -0.03em;
    color: #000000;
    
`;

const Explain=styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #64607D;
    margin-left:6px;
    align-items:left;
`;

export function Cards(props){
    return <div>
        <CardsLayout>
        <CardContainer>
            <TopContainer>
                <Thumbnail>
                    <img src={r2}/>
                </Thumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>
                Prove your skills
                </Title>
                <Explain>
                Gain substantial experience by solving  real-world problems 
                <Explain>
                and pit against others to come up with innovative solutions.
                </Explain>
               
                </Explain>
            </ContentContainer>
        </CardContainer>

        <CardContainer>
            <TopContainer>
                <Thumbnail>
                    <img src={r1}/>
                </Thumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>
                Learn from community
                </Title>
                <Explain>
                One can look and analyze the solutions which submitted by the  
                <Explain>
                other Data Scientists in the community and learn from them.

                </Explain>
               
                </Explain>
            </ContentContainer>
        </CardContainer>

        <CardContainer>
            <TopContainer>
                <Thumbnail>
                    <img src={r3}/>
                </Thumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>
                Challenge yourself
                </Title>
                <Explain>
                There is nothing for you to lose by participating in a 
                </Explain>
                <Explain>
                challenge. You can fail safe, learn out of the entire
                </Explain>
                <Explain>
                experience and bounce back harder.
                </Explain>
            </ContentContainer>
        </CardContainer>

        <CardContainer>
            <TopContainer>
                <Thumbnail>
                    <img src={r4}/>
                </Thumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>
                Earn recognition
                </Title>
                <Explain>
                You will stand out from the crowd if you do well in AI 
                </Explain>
                <Explain>
                challenges, it not only helps you shine in the community but
                </Explain>
                <Explain>
                also earns rewards.
                </Explain>
            </ContentContainer>
        </CardContainer>
        </CardsLayout>
    </div>
}
import React from 'react';

// package
import styled from 'styled-components';


function Finance() {

  return (
    <>
        <FinanceBox>
            <LeftBox>
                <Heading>
                    Various kinds of finanace products
                </Heading>
                <ListHeadings>
                    <ListItems>
                        <HeadingList>
                            1.we have features that help your finances
                            <ArrowSpot>
                                <Arrow src={require('../../assets/images/Component 96.svg').default} alt="Component" />
                            </ArrowSpot>
                        </HeadingList>
                        <Div>
                            <Paragraph> We always want users to be able to make
                                transactions easily and comfortably</Paragraph>
                            <Learn>Learn More <RightArrow><ArrowImg src={require('../../assets/images/Component 94.svg').default} alt="Component" /></RightArrow></Learn>
                        </Div>
                    </ListItems>    
                    <ListItems>
                        <HeadingList>
                            2. we have features that help your finances
                            <ArrowSpot>
                                <Arrow src={require('../../assets/images/Component 96.svg').default} alt="Component"/>
                            </ArrowSpot>
                        </HeadingList>
                        <Hr />
                    </ListItems>
                    <ListItems>
                        <HeadingList>
                            3. we have features that help your finances
                            <ArrowSpot>
                                <Arrow src={require('../../assets/images/Component 96.svg').default} alt="Component" />
                            </ArrowSpot>
                        </HeadingList>
                        <Hr />
                    </ListItems>
                    <ListItems>
                        <HeadingList>
                            4. we have features that help your finances
                            <ArrowSpot>
                                <Arrow src={require('../../assets/images/Component 96.svg').default} alt="Component" />
                            </ArrowSpot>
                        </HeadingList>
                        <Hr />
                    </ListItems> 
                    

                </ListHeadings>
            </LeftBox>
            <RightBox>
                <ImageBox>
                    <Image src={require("../../assets/images/graph image.png")} alt="Graph" />
                </ImageBox>
            </RightBox>
        </FinanceBox>
    </>
  )
}

export default Finance

const FinanceBox = styled.section`
    padding: 50px 10px 50px 120px;
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding: 50px 10px 50px 85px;
    }
`;
const LeftBox = styled.div`
    width: 45%;
`;
const Heading = styled.h2`
    font-size: 58px;
    color:  #1e1e1e;
    width: 90%;
    font-family: "gorditamedium";
    margin-bottom: 50px;
    @media all and (max-width: 1380px) {
        font-size: 50px;
    }
    @media all and (max-width: 1280px) {
        font-size: 40px;
        width: 90%;
    }
     @media all and (max-width: 1080px) {
        font-size: 38px;
    }
`;
const ListHeadings = styled.ul`
    padding-left: 35px;
    @media all and (max-width: 1280px) {
        padding-left: 10px;
    }
`;
const ListItems = styled.li`
    font-size: 22px;
    color:  #1e1e1e;
`;
const HeadingList = styled.h3`
    margin: 30px 0;
    @media all and (max-width: 1380px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
`;
const Div = styled.div`
`;
const Paragraph = styled.p`
    font-size: 16px;
    font-family: "gorditamedium";
    margin-bottom: 10px;
    color: #898989;
`;
const Learn = styled.button`
    color: #FE9A52;
    font-size: 20px;
    font-family: "gorditamedium";
`;
const RightArrow = styled.span`
    width: 20px;
    display: inline-block;
    margin-left: 15px;
`;
const ArrowImg = styled.img`
    width: 100%;
    display: block;
`;
const ArrowSpot = styled.span`
    width:16px;
    display: inline-block;
    margin-left:12px
`;
const Arrow = styled.img`
    width: 100%;
    display: block;
`;
const Hr = styled.hr`
    width: 90%;
    border-bottom: 1px solid #e1e1e1;
`;
const RightBox = styled.div`
    width: 55%;
`;
const ImageBox = styled.div`
    width: 100%;
`;
const Image = styled.img`
    width:100%;
    display: block;
`;


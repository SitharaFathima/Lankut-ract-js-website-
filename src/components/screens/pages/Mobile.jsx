import React from 'react'

// package
import styled from "styled-components";


function Mobile() {
  return (
    <>
        <MobileBox>
            <Left>
                <BluBox>
                    <MobileImgBox>
                        <MobileImg src={require('../../assets/images/mobile-mockup-image.png')} alt="Mobile" />
                    </MobileImgBox>
                </BluBox>
            </Left>
            <Right>
                <Heading>OUR PRODUCT</Heading>
                <SubHeading>
                    Langkut available on mobile & websites
                </SubHeading>
                <Paragraph>We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable.</Paragraph>
                <Bottom>
                    <Div><Img src={require('../../assets/images/paly store.svg').default} alt="App" /></Div>
                    <Div><Img src={require('../../assets/images/app store.svg').default} alt="App" /></Div>
                </Bottom>
            </Right>
        </MobileBox>
    </>
  )
}

export default Mobile

const MobileBox = styled.section`
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 50%;
`;
const BluBox = styled.div`
    position: relative;
    background-color: #1F6BFF;
    width:85%;
    height: 550px;
    border-bottom-right-radius: 60px;
    border-top-right-radius: 60px;
    @media all and (max-width: 1380px) {
        height: 492px;
    }
    @media all and (max-width: 1280px) {
       height: 406px;
    }
`;
const MobileImgBox = styled.div`
    width: 77%;
    position: absolute;
    top: -77px;
    right: 64px;
    @media all and (max-width: 1380px) {
        width: 80%;
    }
    @media all and (max-width: 1280px) {
       top: -69px;
    }
`;
const MobileImg = styled.img`
    width: 100%;
    display: block;
`;
const Right = styled.div`
    width: 50%;
`;
const Heading = styled.h3`
    color: #fe9a52;
    font-size: 18px;
    margin-bottom: 25px;
    font-family: "gorditamedium";
`;
const SubHeading = styled.h2`
    color: #1e1e1e;
    font-size: 58px;
    width: 90%;
    font-family: "gorditamedium";
    margin-bottom: 35px;
    @media all and (max-width: 1380px) {
        font-size: 50px;
    }
    @media all and (max-width: 1280px) {
       font-size: 40px;
    }
`;
const Paragraph = styled.p`
    margin-bottom: 55px;
    font-size: 18px;
    width:76%;
    font-family: "gorditamedium";
    color: #898989;
`;
const Bottom = styled.div`
    display: flex;
`;
const Div = styled.div`
    margin-right: 30px;
    width: 35%;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;

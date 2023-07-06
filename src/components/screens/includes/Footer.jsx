import React from 'react';

// package
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
        <Top>
            <Left>
                <LogoContainer>
                    <LogoBox>
                        <LogoImg src={require("../../assets/images/logo2.svg").default}
                        alt="Logo" />
                    </LogoBox>
                </LogoContainer>
                <Paragraph>"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."</Paragraph>
            </Left>
            <Right>
                    <Items>
                        <Item><List>Company</List></Item>
                        <Item><List>About Us</List></Item>
                        <Item><List>Careers</List></Item>
                        <Item><List>Blog</List></Item>
                        <Item><List>testimoni</List></Item>
                    </Items>
                    <Items>
                        <Item><List>Our Services</List></Item>
                        <Item><List>My Card</List></Item>
                        <Item><List>Digital Bank</List></Item>
                        <Item><List>Finance</List></Item>
                        <Item><List>Sending</List></Item>
                    </Items>
                    <Items>
                        <Item><List>Social Media</List></Item>
                        <Item><List>Instagram</List></Item>
                        <Item><List>Twitter</List></Item>
                        <Item><List>Facebook</List></Item>
                        <Item><List>Linkedin</List></Item>
                    </Items>
                    <Items>
                        <Item><List>Others</List></Item>
                        <Item><List>Documentation</List></Item>
                        <Item><List>Community</List></Item>
                        <Item><List>Apps</List></Item>
                    </Items>
            </Right>
        </Top>
        <Bottom>
            <Container>
                <BottomLeft>
                    <Name>Kisona khan</Name>
                </BottomLeft>
                <BottomRight>
                    <Title>Terms & condition</Title>
                    <Title>Privacy policy</Title>
                </BottomRight>
            </Container>
        </Bottom>
    </FooterBox>  
  )
}

export default Footer

const FooterBox = styled.section`
    background-color: #1E1E1E;
    padding: 140px 120px 80px;
`; 
const Top= styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`; 
const Left = styled.div`
    width: 50%;
    @media all and (max-width: 1280px) {
        width: 40%;
    }
`; 
const LogoContainer = styled.h1`
    width: 90%;
`; 
const LogoBox = styled.a`
    width: 26%;
    display: block;
    margin-bottom: 15px;
    @media all and (max-width: 1280px) {
        width: 40%;
    }
`; 
const Paragraph = styled.p`
    color: #898989;
    width: 50%;
    @media all and (max-width: 1280px) {
        width: 80%;
    }
`; 
const LogoImg = styled.img`
    width: 100%;
    display : block;
`; 
const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 60%;
    }
`; 
const Items = styled.ul`
`; 
const Item = styled.li`
margin-bottom: 25px;
    :first-child{
        a{
            color: #fff;
        }
    }
`; 
const List = styled.a`
    color: #898989;
    font-size: 16px;
    font-family: "gorditamedium";
`; 
const Bottom = styled.div`
    border-top: 1px solid #898989;
`; 
const Container = styled.ul` 
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`; 
const Name = styled.h4`
    color: #898989;
`; 
const BottomRight = styled.div`
    display: flex;
`; 
const Title = styled.h4`
    color: #898989;
`; 
const BottomLeft = styled.div`

`; 
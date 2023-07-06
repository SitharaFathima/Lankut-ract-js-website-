import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-scroll";


function Header() {
  return (
    <>
        <Head>
            <Heading>
                <LogoBox>
                    <Logo src={require("../../assets/images/LOGO.png")}
                        alt="Logo" />
                </LogoBox>
            </Heading> 
            <Nav>
                <Lists>
                    <List><Item activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Item></List>
                    <List><Item activeClass="active" to="service" spy={true} smooth={true} offset={-100} duration={500}>Service</Item></List>
                    <List><Item activeClass="active" to="feature" spy={true} smooth={true} offset={-100} duration={500}>Feature</Item></List>
                </Lists>
            </Nav>
            <Right>
                <Items>
                    <BlueItem>
                        <Register>Register</Register>
                    </BlueItem>
                    <BlueItem>
                        <BlueButton>Login now</BlueButton>
                    </BlueItem> 
                </Items>
            </Right>
        </Head>
    </>
  )
}

export default Header

const Head = styled.header`
    padding: 30px 125px;
    display : flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding: 30px 100px;
    }
`;
const Heading = styled.h1`
    width:12%;
    @media all and (max-width: 1080px) {
        width: 18%;
    }
`;
const LogoBox = styled.a`
    display: block;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const Nav = styled.nav`
    
`;
const Lists = styled.ul`
    display: flex;
`;
const List = styled.li`
    margin-right: 105px;
    :last-child{
        margin-right: 0;
    }
    @media all and (max-width: 1380px) {
        margin-right: 90px;
    }
    @media all and (max-width: 1280px) {
        margin-right: 60px;
    }
`;
const Item = styled(Link)`
    font-size: 18px;
    color: #898989;
    font-weight: 600;
    cursor: pointer;
    @media all and (max-width: 1380px) {
        font-size: 15px;
    }
`;
const Right = styled.div`
    
`;
const Items = styled.ul`
    display: flex;
`;
const BlueItem = styled.li`
    margin-right: 20px;
    :last-child{
        margin-right: 0;
    }
`;
const Register = styled.a`
    font-size: 18px;
    color: #1F6BFF;
    font-weight: 600;
    @media all and (max-width: 1380px) {
        font-size: 15px;
    }
`;
const BlueButton = styled.a`
    font-size: 18px;
    color: #fff;
    background-color: #1F6BFF;
    padding: 17px 38px;
    border-radius: 8px;
    font-weight: bold;
    @media all and (max-width: 1380px) {
        padding: 12px 25px;
        font-size: 15px;
    }
`;
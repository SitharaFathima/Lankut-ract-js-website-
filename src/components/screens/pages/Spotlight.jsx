import React from "react";

// package
import styled from "styled-components";

function Spotlight() {
    
// mapping

    const apps = [
        {
            id: 1,
            image: require("../../assets/images/stripe.svg").default,
        },
        {
            id: 2,
            image: require("../../assets/images/bitpay.svg").default,
        },
        {
            id: 3,
            image: require("../../assets/images/affrim.svg").default,
        },
        {
            id: 4,
            image: require("../../assets/images/visa.svg").default,
        },
        {
            id: 5,
            image: require("../../assets/images/paypal.svg").default,
        },
    ]

    return (
        <>
            <MainBox>
                <Left>
                    <Financial>FINANCIAL OLATFORM NO.1</Financial>
                    <Title>Best & Trusted Digital Bank</Title>
                    <Description>
                        By using Langkut can make it easier for you to control
                        or in money transcations.
                    </Description>
                    <Form>
                        <FormData>
                            <Label for="user">Type your username</Label>
                            <Input
                                id="user"
                                type="text"
                                name="user"
                                value="Christiana Malont"
                            />
                        </FormData>
                        <FormButton>
                            <Bluebutton> Get Started</Bluebutton>
                        </FormButton>
                    </Form>
                    <BottomBox>
                        <AppNames>
                        {apps.map((item) => (
                            <ListName>
                                <Appbox>
                                    <AppImg src={item.image} alt="App-Images" />
                                </Appbox>
                            </ListName>
                        ))}
                        </AppNames>
                    </BottomBox>
                </Left>
                <Right>
                    <ImageBox>
                        <MobileImg
                            src={require("../../assets/images/spotlight.png")} alt="Spotlight"
                        />
                    </ImageBox>
                </Right>
            </MainBox>
        </>
    );
}

export default Spotlight;

const MainBox = styled.section`
    padding: 100px 110px 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        padding: 30px 85px;
    }
`;
const Left = styled.div`
    padding: 20px 0;
    width: 54%;
`;
const Financial = styled.h3`
    color: #fe9a52;
    font-size: 20px;
    margin-bottom: 25px;
    font-family: "gorditamedium";
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
`;
const Title = styled.h2`
    color: #1e1e1e;
    font-size: 75px;
    width: 80%;
    font-family: "gorditamedium";
    margin-bottom: 35px;
    @media all and (max-width: 1380px) {
        font-size: 60px;
    }
    @media al40pxl and (max-width: 1280px) {
       font-size: 50px;
    }
    @media all and (max-width: 1080px) {
        font-size: 40px;
    }
`;
const Description = styled.p`
    font-size: 22px;
    color: #898989;
    width: 90%;
    margin-bottom: 45px; 
    @media all and (max-width: 1380px) {
        font-size: 18px;
    }

`;
const Form = styled.form`
    width: 85%;
    padding:2% 1%;
    background-color: #f4f4f4;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    margin-bottom: 50px;
`;
const FormData = styled.div`

`;
const Label = styled.label`
   display: block;
   margin-bottom: 10px;
   font-size: 16px;
   color: #898989;
`;
const Input = styled.input`
    font-size: 26px;
    color: #1e1e1e;
    font-family: "gorditamedium";
    @media all and (max-width: 1380px) {
        font-size: 22px;
    }
    @media all and (max-width: 1280px) {
       font-size: 20px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
`;
const FormButton = styled.div`
    width: 36%;
    border-radius: 10px;
    background-color: #1f6bff;
    padding: 25px 40px;
    border-radius: 13px;
    text-align: center;
    @media all and (max-width: 1280px) {
      padding: 16px;
    }
`;
const Bluebutton = styled.button`
    color: #fff;
    font-size: 20px;
    font-family: "gorditamedium";
    @media all and (max-width: 1380px) {
        font-size: 15px;
    }
`;
const BottomBox = styled.div``;
const AppNames = styled.ul`
    display: flex;
    width: 80%;
    justify-content: space-between;
    justify-content: space-between;
    @media all and (max-width: 1380px) {
        width: 90%;
    }
   
`;
const ListName = styled.li`
    width: 16%;
    @media all and (max-width: 1380px) {
        width: 20%;
    }
   
    :nth-child(3){
        width: 14%;
        @media all and (max-width: 1380px) {
            width: 18%;
        }
    }
    :last-child{
        width:17%;
        @media all and (max-width: 1380px) {
            width: 22%;
        }
    }
`;
const Appbox = styled.a`
    margin-right: 20px;
    display: inline-block;
`;
const AppImg = styled.img`
    display: block;
    width: 100%;
`;
const Right = styled.div`
    width: 46%;
`;
const ImageBox = styled.div`
    width: 100%;
`;
const MobileImg = styled.img`
    width: 100%;
    display: block;
`;

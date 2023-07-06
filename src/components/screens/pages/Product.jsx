import React from "react";

// package
import styled from "styled-components";

function Product() {
    
    // mapping

    const List = [
        {
            id: 1,
            title:"Make transaction easier",
            description: " We always want users to be able to make transactions easily and comfortably",
            gallery: [
                {
                    image: require("../../assets/images/Frame.png"),
                },
            ],
        },
        {
            id: 2,
            title:"Make transaction easier",
            description: " We always want users to be able to make transactions easily and comfortably",
            gallery: [
                { image: require("../../assets/images/Frame1.png") },
                { image: require("../../assets/images/Frame2.png") },
            ],
        },
        {
            id: 3,
            title:"Make transaction easier",
            description: " We always want users to be able to make transactions easily and comfortably",
            gallery: [
                {image: require("../../assets/images/Component.svg").default},
                {image: require("../../assets/images/Component1.svg").default},
                {image: require("../../assets/images/Component2.svg").default},
                {image: require("../../assets/images/Component.svg").default},
            ],
        },
    ];

    return (
        <>
            <ProductPage>
                <TopBox>
                    <Title>OUR PRODUCT</Title>
                    <SubTitle>Various kinds of finance products</SubTitle>
                </TopBox>
                <BottomBox>
                    <Container>
                        {List.map((item) => (
                            <ItemBox>
                                <Box>
                                    <OuterBox className="wrap" >

                                    {item.gallery.map((gallery) =>{
                                        return <ImageBox className="imgcontainer">
                                                <QRcode src={gallery.image} alt="Image" />
                                            </ImageBox>
                                        })}
                                    </OuterBox>
                                </Box>
                                <ContentBox>
                                    <Heading>{item.title}</Heading>
                                    <Description>
                                    {item.description}
                                    </Description>
                                </ContentBox>
                            </ItemBox>
                        ))}
                    </Container>
                </BottomBox>
            </ProductPage>
        </>
    );
}

export default Product;

const ProductPage = styled.section`
    padding: 50px 140px;
    @media all and (max-width: 1280px) {
        padding: 50px 85px;
    }
`;
const TopBox = styled.div`
    text-align: center;
    margin-bottom: 80px;
`;
const Title = styled.h3`
    color: #fe9a52;
    font-size: 18px;
    margin-bottom: 25px;
    font-family: "gorditamedium";
`;
const SubTitle = styled.h2`
    color: #1e1e1e;
    font-size: 58px;
    width: 40%;
    margin: 0 auto;
    font-family: "gorditamedium";
    @media all and (max-width: 1380px) {
        width: 60%;
        font-size: 52px;
    }
`;
const BottomBox = styled.div``;
const Container = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const ItemBox = styled.li`
    width: 29%;
    :nth-child(2){
        .imgcontainer{
            margin-bottom: 10px;
            width: 100%;
            :last-child{
                margin-bottom: 0;
            }
        }
    }
    :last-child{
        .wrap{
            justify-content: center;
            display:flex;
            flex-wrap: wrap;
                .imgcontainer{
                   padding: 25px;
                   border-radius: 18px;
                   width: 34%;
                   background-color: #fff;
                   margin: 5px;
                    :last-child{
                        margin-bottom: 0;
                    }
                    :nth-last-child(2){
                        margin-bottom: 0;
                    }  
                    @media all and (max-width: 1280px) {
                        padding: 10px;
                    } 
                }
            }
        }
`;
const Box = styled.div`
    width:100%;
    padding: 35px;
    border-radius: 20px;
    background-color: hsl(0, 0%, 90%);
    margin-bottom: 25px;
`;
const OuterBox = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const ImageBox = styled.div`
    margin: 0 auto;
    width: 60%;
`;
const QRcode = styled.img`
    width: 100%;
    display: block;
`;
const ContentBox = styled.div``;
const Heading = styled.h3`
    font-size: 35px;
    color: #1e1e1e;
    font-family: "gorditamedium";
    margin-bottom: 25px;
    @media all and (max-width: 1380px) {
        font-size: 30px;
    }
    @media all and (max-width: 1280px) {
       font-size: 24px;
    }
`;
const Description = styled.p`
    font-size: 22px;
    color: #898989;
    font-family: "gorditamedium";
    width: 98%;
    @media all and (max-width: 1380px) {
        font-size: 18px;
        width: 100%;
    }
`;

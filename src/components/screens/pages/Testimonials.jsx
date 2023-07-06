import React from "react";

// package
import styled from "styled-components";
import Slider from "react-slick";

// styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Testimonials() {

// slider

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

// mapping

const datas = [
    {
        id:1,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/Lyft logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',

    },
    {
        id:2,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/shopify-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',

    },
    {
        id:3,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/google-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:4,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:5,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:6,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:7,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:8,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:9,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
    {
        id:10,
        description: '"We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable."',
        image: require('../../assets/images/zoom-logo.svg').default,
        icon: require('../../assets/images/profile.jpg'),
        name: 'Kisona khan',
        position: 'CEO slak cooperate.inc',
    },
]

  return (
    <>
        <TestimonialBox>
            <Top>
                <Heading>OUR TESTIMONIALS</Heading>
                <SubHeading>Testimonials</SubHeading>
                <Paragraph>We always want users to be able to make transactions easily comfortable always want users to be able to make transactions easily and comfortable.</Paragraph>
            </Top>
            <Bottom>
                <Slider {...settings}>
                {datas.map((item) => (
                    <Items>
                        <List>
                            <ImgBox>
                                <AppImg src={item.image} alt="App" />
                            </ImgBox>
                            <Quote>{item.description}</Quote>
                            <Container>
                                <ProfailBox>
                                    <Profail src={item.icon} alt="Profail" />
                                </ProfailBox>
                                <Content>
                                    <Name>{item.name}</Name>
                                    <Position>{item.position}</Position>
                                </Content>
                            </Container>
                        </List>
                    </Items>
                ))}
                </Slider>
            </Bottom>
        </TestimonialBox>
    </>
  )
}

export default Testimonials

const TestimonialBox = styled.section`
    padding: 100px 0 140px;
    background-color: hsl(0, 0%, 90%);
    @media all and (max-width: 1280px) {
      padding: 100px 0;
    }
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;
const Heading = styled.h3`
    color: #fe9a52;
    font-size: 20px;
    margin-bottom: 25px;
    font-family: "gorditamedium";
`;
const SubHeading = styled.h2`
    color: #1e1e1e;
    font-size: 58px;
    font-family: "gorditamedium";
    margin-bottom: 30px;
`;
const Paragraph = styled.p`
    font-size: 16px;
    color: #898989;
    margin: 0 auto;
    font-family: "gorditamedium";
    width: 50%;
`;
const Bottom = styled.div`
   
`;
const Items = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const List = styled.li`
    width: 95%;
    background-color: #fff;
    padding: 25px;
    border-radius: 22px;
    margin-bottom: 100px;
    @media all and (max-width: 1280px) {
       font-size: 50px;
    }
`;
const ImgBox = styled.div`
    width: 45%;
    margin-bottom: 15px;
`;
const AppImg = styled.img`
    display: block;
    width: 100%;
`;
const Quote = styled.p`
    width: 90%;
    margin-bottom: 45px;
    color: #898989;
    font-size: 17px; 
    @media all and (max-width: 1280px) {
       font-size: 14px;
    }
`;
const Container = styled.div`
    display:flex;
`;
const ProfailBox = styled.div`
    width:14%;
    margin-right: 25px;
`;
const Profail = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const Content = styled.div`

`;
const Name = styled.h4`
    color: #000;
    font-size: 15px;
    font-family: "gorditamedium";
`;
const Position = styled.p`
    color: #898989;
    font-size: 16px;
    font-family: "gorditaregular";
    @media all and (max-width: 1280px) {
       font-size: 12px;
    }
`;

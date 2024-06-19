import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Carousel from "../../components/Carousel";

function Home() {

  return (
    <>
    <Header />
    <Banner image="favoritos" />
    <Container>
       {
        categories.map((category, index) => 
          <Category category={category}>
            <Carousel>
            { filterCategory(index).map((video) => <Card id={video.id} key={video.id} /> )}
            </Carousel>
          </Category>
          )
       }   
    </Container>
    <Footer />
    </>
  );
}

export default Home;
/*todo elemtento colocado no react é um componente, e deve ser colcado em uma pasta pre-definida*/
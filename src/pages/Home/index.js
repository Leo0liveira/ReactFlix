import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'; 

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O sonho de Yukihira Souma é se tornar um chef no restaurante de seu pai e superar a culinária dele. Mas assim que Yukihira se forma no ensino fundamental, seu pai, Jouichirou, fecha o restaurante para ir cozinhar na Europa. Apesar de estar para baixo, o espírito lutador de Souma reacende quando seu pai o desafia a sobreviver numa escola de culinária de elite onde só 10% dos alunos se formam. Será que Souma sobreviverá?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
      category={dadosIniciais.categorias[1]}
      />
      
      <Carousel
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      category={dadosIniciais.categorias[3]}
      />

      <Carousel
      category={dadosIniciais.categorias[4]}
      />

      <Carousel
      category={dadosIniciais.categorias[5]}
      />

      <Footer/>
      
    </div>
  );
}

export default Home;

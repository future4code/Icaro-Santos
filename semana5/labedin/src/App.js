import React from 'react';
import './App.css';
import Icaro from './icaro.jpg';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Icaro} 
          altImagem={"Foto do Icaro"}
          nome="Icaro" 
          descricao="Oi, eu sou o Icaro. Sou aluno da Labenu. Amo jogar FPS online, ou jogos em competitivos em geral."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          altImagem={"Seta"}
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={"https://www.traum.com.br/wp-content/uploads/2018/06/email-icon-121-400x400.png"}
          altImagem={"email icon"}
          descricao={"Email: "}
          informacao={"icaro.ssantos96@gmail.com"}
        />
        <CardPequeno 
          imagem={"https://image.flaticon.com/icons/svg/1239/1239525.svg"} 
          altImagem={"endereco icon"}
          descricao={"Endereço: "} 
          informacao={"Estrada dos Alvarenga 10.059"} 
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande
          imagem={"https://unipeadvilamaria.com.br/wp-content/uploads/2018/11/cropped-icone.png"}
          altImagem={"unip icon"}
          nome={"UNIP"}
          descricao={"2019 até 2012 - Análise e Desenvolvimento de Sistemas"}
          />
        <CardGrande
          imagem={"https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5e791f706b1280c869ec01b8_Logo_labenu_pq.png"}
          altImagem={"labenu icon"}
          nome={"Labenu"}
          descricao={"Full Stack Developer"}
        />
        <CardGrande
            imagem={"https://cdn6.aptoide.com/imgs/8/a/f/8afd479e1ab2231ff09ee2ecac697a0b_icon.png?w=256"}
            altImagem={"alura icon"}
            nome={"Alura"}
            descricao={"Lógica de Programação com HTML e JavaScript; HTML e CSS; Design Responsivo; Photoshop: Tratamento de imagens; Criação de ilustração vetorial no Illustrator"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://ricercainovacao.com.br/wp-content/uploads/2017/04/logoRicerca_preto.png" 
          altImagem={"Ricerca icon"}
          nome="Ricerca" 
          descricao="Estagiário" 
        />
        
        <CardGrande 
          imagem="https://grupoallnet.com.br/wp-content/uploads/2018/11/favicon-allnet-150x150.png" 
          altImagem={"all net icon"}
          nome="All Net" 
          descricao="Instrutor de Informática" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          altImagem={"facebook icon"}
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          altImagem={"twitter icon"}
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

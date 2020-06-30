import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./styles.scss";

import { useAloBebeImage } from '../hooks/use-alo-bebe-images';
import { useDiPanoImage } from '../hooks/use-di-pano-image';
// import { useNosDaviImage } from '../hooks/use-nos-davi-image';
// import { useTipTopImage } from '../hooks/use-tip-top-image';

import Img from "gatsby-image";
import MyForm from "../components/my-form";


const IndexPage = () => {
  const LIST = [
    {
      title: 'Alô Bebê',
      link: 'https://www.alobebe.com.br/cha-de-bebe/enxoval/cha-do-martin.html,69346tatiana',
      image: useAloBebeImage(),
    },
    // {
    //   title: 'Nós e o Davi',
    //   link: 'https://www.noseodavi.com/lista/index/registry/id/Z6DSHFOONIBC/',
    //   image: useNosDaviImage(),
    // },
    {
      title: 'Fraldas di Pano',
      link: 'https://www.fraldasdipano.com.br/list/martinruizlopes',
      image: useDiPanoImage(),
      advise: "* Não precisa pagar frete"
    },
    // {
    //   title: 'Tip Top',
    //   link: 'https://chadebebe.tiptop.com.br/listas/convidados/41ea77495cf0ca02',
    //   image: useTipTopImage()
    // }
  ];
  return (
    <Layout>
      <SEO title="Chá do Martin" />
      <section className="text">
        <h2>Oi Pessoal, quero convidar vocês para o meu chá de bebê!</h2>
        <p>
          Não vai ser como eu esperava, com todo mundo passando a mão na barriga da mamãe, dando tapinhas
          nas costas do papai, transmitindo afeto e carinho rodeados de docinhos.
        </p>
        <p>Mas, apesar de vocês não poderem visitar o papai e a mamãe por conta do isolamento social,
          você ainda pode mandar carinho virtualmente <span role="img" aria-label="heart">❤️</span>.
        </p>
        <p>Eles fizeram algumas listas virtuais de chá de bebê nesses sites:</p>
      </section>

      <section className="shopList">
        {LIST.map(({title, link, image, advise}, index) => (
          <a key={`link-${index}`} className="links" href={link} target="_blank" rel="noopener noreferrer">
            <Img fixed={image.fixed} alt={title} title={title} />
            <p>{title}</p>
            {advise && 
              (<small><strong>* Não precisa contribuir com o frete!</strong></small>)
            }
          </a>
        ))}
      </section>

      <section className="text">
        
      </section>

      <section className="text">
        <p>
          Você pode comprar em qualquer um deles que vamos receber tudinho do conforto do nosso lar.
        </p>
        <strong>Caso queria mandar algo para nós, esse é o endereço:</strong>
        <address>
          Rua Comendador Elias Assi, 126 - Apto 42 <br />
          Caxingui, São Paulo - SP <br/>
          CEP: 05516-000
        </address>
      </section>

      <section className="text form-section">
        <MyForm />
      </section>
      <section className="sign">
        Obrigado, Martin.
        <div style={{ maxWidth: `100px`, width: "100px", }}>
          <Image />
        </div>
      </section>

    </Layout>
  )
}


export default IndexPage

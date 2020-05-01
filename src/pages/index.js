import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./styles.scss";

import { useAloBebeImage } from '../hooks/use-alo-bebe-images';
import { useDiPanoImage } from '../hooks/use-di-pano-image';
import { useNosDaviImage } from '../hooks/use-nos-davi-image';
import { useTipTopImage } from '../hooks/use-tip-top-image';

import Img from "gatsby-image";



console.log(styles)

const IndexPage = () => {
  const tipTop = useTipTopImage();
  const LIST = [
    useAloBebeImage(),
    useDiPanoImage(), 
    useNosDaviImage(),
    useTipTopImage()
  ];
  console.log(LIST)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Oi Pessoal!</h1>
      <p>Quero convidar vocês para o meu chá de bebê.</p>
      <p>Será totalmente virtual por conta do isolamento social.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <section className={styles.shopList}>
        {LIST.map( ({fixed}) => (

          <a className={styles.links} href="https://www.noseodavi.com/lista/index/registry/id/Z6DSHFOONIBC/" target="_blank" rel="noopener noreferrer">
            <Img fixed={fixed} />
            <p>
              Lista Nós e o Davi
            </p>
          </a>
        ))}
      </section>
      <ul>
        <li>
          <a href="https://www.fraldasdipano.com.br/list/martinruizlopes" target="_blank" rel="noopener noreferrer">
            Lista Fraldas di Pano
          </a>
        </li>
        <li>
          <a href="https://www.alobebe.com.br/cha-de-bebe/enxoval/cha-do-martin.html,69346tatiana" target="_blank" rel="noopener noreferrer">
            Lista alô bebê
          </a>
        </li>
        <li>
          <a href="https://chadebebe.tiptop.com.br/listas/convidados/41ea77495cf0ca02"  target="_blank" rel="noopener noreferrer">
            Tip Top
          </a>
        </li>
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}


export default IndexPage

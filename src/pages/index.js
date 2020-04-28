import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Oi Pessoal!</h1>
    <p>Quero convidar vocês para o meu chá de bebê.</p>
    <p>Será totalmente virtual por conta do isolamento social.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li>
        <a href="https://www.noseodavi.com/lista/index/registry/id/Z6DSHFOONIBC/" target="_blank">
          Lista Nós e o Davi
        </a>
      </li>
      <li>
        <a href="https://www.fraldasdipano.com.br/list/martinruizlopes" target="_blank">
          Lista Fraldas di Pano
        </a>
      </li>
      <li>
        <a href="https://www.alobebe.com.br/cha-de-bebe/enxoval/cha-do-martin.html,69346tatiana" target="_blank">
          Lista alô bebê
        </a>
      </li>
      <li>
        <a href="https://chadebebe.tiptop.com.br/listas/convidados/41ea77495cf0ca02"  target="_blank">
          Tip Top
        </a>
      </li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

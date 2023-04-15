import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Apresentation, Container, Content, Setup } from '@/styles/setup'
import { NextPage } from 'next'
import Head from 'next/head'

const WorkIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hércules C. | Setup</title>
      </Head>
      <Header />
      <Container>
        <Content>
          <Apresentation>
            <h1>
              My <span>setup</span>
            </h1>
            <p>
              I currently have two machines, one for work and one for personal
              use.
            </p>
          </Apresentation>
          <Setup>
            <h2>
              <span>Work</span>
            </h2>
            <p>Notebook Dell Vostro:</p>
            <ul>
              <li>I7 10th Gen</li>
              <li>16GB RAM</li>
              <li>NVIDIA GeForce MX230</li>
              <li>SSD 220GB</li>
            </ul>
          </Setup>
          <Setup>
          <h2>
              <span>Personal</span>
            </h2>
            <p>Notebook Dell G15:</p>
            <ul>
              <li>I5 12th Gen</li>
              <li>8GB RAM</li>
              <li>NVIDIA GeForce RTX3050</li>
              <li>SSD 240GB</li>
            </ul>
          </Setup>
          <Setup>
            <h2>
              <span>Periferics</span>
            </h2>
            <p>Keyboard Philco Gaming</p>
            <p>Mouse Philco Gaming</p>
            <p>Headset WAAW</p>
            <p>Monitor LG 24’</p>
            <p>Monitor Dell G15 120hz 15’</p>
            <p>Mousepad PlayStation</p>
            <p>Cadeira DxRacer</p>
            <p>Mouse Wireless Dell</p>
          </Setup>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default WorkIn

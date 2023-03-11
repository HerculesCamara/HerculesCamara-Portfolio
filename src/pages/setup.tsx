import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WorkInProgress } from '@/components/WorkInProgress'
import {
  Apresentation,
  Container,
  Content,
  Mobile,
  Setup
} from '@/styles/setup'
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
            <p>AMD Ryzen 5 2400G</p>
            <p>Radeon RX570 8GB</p>
            <p>16GB RAM</p>
            <p>SSD 240GB</p>
            <p>HD Toshiba 1TB</p>
            <p>Gabinete Bluecase BG022</p>
            <p>Fonte ElectroV2 PCYes 500W</p> <p>Placa mãe Asus B-250</p>
          </Setup>
          <Setup>
            <h2>
              <span>Periferics</span>
            </h2>
            <p>Keyboard T-Dager</p>
            <p>Mouse Logitech</p>
            <p>Headset Redragon</p>
            <p>Monitor AOC 21’</p>
            <p>Monitor LG 24’</p>
            <p>Mousepad Husky</p>
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

/* document.getElementById('isi-stick-button').addEventListener('click', scrollIsi)

function scrollIsi() {
  document.getElementById('foter-isi')?.scrollIntoView()
  console.log('test')
}

document.getElementById('isi-stick-button').addEventListener('click', scrollIsi)

function scrollIsi() {
  document.getElementById('block-isifull')?.scrollIntoView()
  console.log('clicked')
}



let images = document.querySelectorAll('img')

data-block-plugin-id

block-navigationlogoimage

document
  .getElementById('block-navigationlogoimage')
  .removeAttribute('data-block-plugin-id')

document.querySelectorAll('img').removeAttribute('loading') */

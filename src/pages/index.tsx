import type { NextPage } from 'next'
import { Header } from '../components/Header'
import {
  About,
  Container,
  Im,
  Projects,
  Links,
  Contact,
  Content,
  Apresentation
} from '../styles/Home'

import { Footer } from '../components/Footer'
import Image from 'next/image'

import arrow from '@/assets/arrow-right.svg'
import me from '@/assets/me-home.png'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hércules C. | Home</title>
      </Head>
      <Header />
      <Container>
        <Content>
          <Apresentation>
            <Im>
              Hi! 👋
              <br />
              Im <span>Hércules Câmara</span>
            </Im>
            <About>
              Web developer and UI/UX designer | Front-end dev at{' '}
              <a
                href="https://hitdigital.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                HitDigital
              </a>
              .
            </About>
            <Links>
              <Projects>Projects</Projects>
              <Contact>
                Contact <Image src={arrow} alt="" />
              </Contact>
            </Links>
          </Apresentation>
          <Image src={me} />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default Home

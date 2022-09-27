import type { NextPage } from 'next'
import { Header } from '../components/Header'
import {
  About,
  Container,
  Im,
  Projects,
  Contact,
  Content,
  Apresentation,
  Mobile,
  Buttons
} from '../styles/Home'

import { Footer } from '../components/Footer'
import Image from 'next/image'

import arrow from '@/assets/arrow-right.svg'
import picture from '@/assets/me-home.png'
import Head from 'next/head'
import { WorkInProgress } from '@/components/WorkInProgress'

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
            <Buttons>
              <Projects as="a" href="/work-in">
                Projects
              </Projects>
              <Contact as="a" href="/contact">
                Contact <Image src={arrow} alt="" />
              </Contact>
            </Buttons>
          </Apresentation>
          <Image src={picture} />
        </Content>
      </Container>
      <Footer />
      <Mobile>
        <WorkInProgress />
      </Mobile>
    </>
  )
}

export default Home

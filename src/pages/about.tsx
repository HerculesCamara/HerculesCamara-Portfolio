import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  Me,
  Container,
  Apresentation,
  Career,
  Picture,
  TimeLine,
  Date,
  Content
} from '@/styles/about'

import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import me from '@/assets/me-about.png'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hércules C. | About</title>
      </Head>
      <Header />
      <Container>
        <Content>
          <Me>
            <Apresentation>
              <h1>
                About <span>Hércules Câmara</span>
              </h1>
              <p>I’m Hércules Câmara and I’m have 21 years.</p>

              <p>
                I’m a Software Engineer student at UniEvangélica, I’m a front-end
                developer at HitDigital and I produce projects in my spare time.
              </p>

              <p>In my free time I also like to watch series and anime.</p>
            </Apresentation>
            <Picture>
              <Image src={me} />
            </Picture>
          </Me>
          <Career>
            <h2>Career</h2>
            <TimeLine>
            <Date>
                <h4>
                  2023<span>/01</span>
                </h4>
                <p>
                  UniEvangélica, Software Engineer graduation: <span>start</span>
                </p>
              </Date>
              <Date>
                <h4>
                  2022<span>/01</span>
                </h4>
                <p>
                  HitDigital: <span>start</span>
                </p>
              </Date>
              <Date>
                <h4>2022/2021</h4>
                <p>Free Lancer</p>
              </Date>
              <Date>
                <h4>2019</h4>
                <p>
                  IFMT, Computing course: <span>end</span>
                </p>
              </Date>
              <Date>
                <h4>2017</h4>
                <p>
                  IFMT, Computing course: <span>start</span>
                </p>
              </Date>
              <Date>
                <h4>2002</h4>
                <p>Birth</p>
              </Date>
            </TimeLine>
          </Career>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default About

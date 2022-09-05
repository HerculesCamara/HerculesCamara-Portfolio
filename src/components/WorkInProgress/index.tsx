import Head from 'next/head'
import { Container, Content, SocialMedias } from './styles'

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export function WorkInProgress() {
  return (
    <>
      <Head>
        <title>Hércules C. | Work in progress</title>
      </Head>
      <Container>
        <Content>
          <h1>
            <a href="./">Hércules Câmara</a>
          </h1>
          <span>Work in progress...</span>
        </Content>
        <SocialMedias>
          <a
            href="https://github.com/HerculesCamara"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.instagram.com/herculescamara_/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/herculescamara/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </SocialMedias>
      </Container>
    </>
  )
}

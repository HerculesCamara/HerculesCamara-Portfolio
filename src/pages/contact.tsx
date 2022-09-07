import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  Apresentation,
  Buttons,
  Container,
  Content,
  Copy,
  Mobile,
  Send
} from '@/styles/contact'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import arrow from '@/assets/arrow-right.svg'
import { WorkInProgress } from '@/components/WorkInProgress'

const WorkIn: NextPage = () => {
  function handleCopyAddress() {
    navigator.clipboard.writeText('heculescamara2013@gmail.com')
    alert('Email address copied successfully')
  }

  return (
    <>
      <Head>
        <title>Hércules C. | Contact</title>
      </Head>
      <Header />
      <Container>
        <Content>
          <Apresentation>
            <h1>
              <span>Contact</span> me
            </h1>
            <p>Contact me via email.</p>
          </Apresentation>
          <Buttons>
            <Copy onClick={handleCopyAddress}>Copy address</Copy>
            <Send as="a" href="mailto: heculescamara2013@gmail.com">
              Send email
              <Image src={arrow} />
            </Send>
          </Buttons>
        </Content>
      </Container>
      <Footer />
      <Mobile>
        <WorkInProgress />
      </Mobile>
    </>
  )
}

export default WorkIn

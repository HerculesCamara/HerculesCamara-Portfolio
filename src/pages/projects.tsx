import { Card } from '@/components/Card'
import { ContentSelector } from '@/components/ContentSelector'
import { Filter } from '@/components/Filter'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {
  AllProjectsContainer,
  AllProjectsContent,
  AllProjectsHeader,
  Carroussel,
  Container,
  Content,
  TopProjects
} from '@/styles/projects'
import { NextPage } from 'next'
import Head from 'next/head'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hércules C. | Projects</title>
      </Head>
      <Header />
      <Container>
        <Content>
          <ContentSelector />
          <TopProjects>
            <h1>Top projects</h1>
            <Carroussel>
              <Card
                title="AutoCalc"
                description="Tenha em mãos as fórmulas matemáticas e suas variações."
                bannerLink="https://user-images.githubusercontent.com/39931772/224523096-d3efa2f8-7b42-4f7e-92f4-7982062224f6.png"
                link="https://github.com/HerculesCamara/autocalc"
              />
              <Card
                title="Selic CDI"
                description="Know the current value of SELIC and CDI."
                bannerLink="https://user-images.githubusercontent.com/39931772/224522360-3b60a986-6f21-41a1-9dfb-d64ca70afe05.png"
                link="https://github.com/HerculesCamara/SelicCDI"
              />
            </Carroussel>
          </TopProjects>
          <AllProjectsContainer>
            <AllProjectsHeader>
              <h1>All Projects</h1>
              <Filter />
            </AllProjectsHeader>
            <AllProjectsContent>
              <Card
                title="AutoCalc"
                description="Tenha em mãos as fórmulas matemáticas e suas variações."
                bannerLink="https://user-images.githubusercontent.com/39931772/224523096-d3efa2f8-7b42-4f7e-92f4-7982062224f6.png"
                link="https://github.com/HerculesCamara/autocalc"
              />
              <Card
                title="NFT Card"
                description="This is a solution to the NFT preview card component challenge on Frontend Mentor."
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/nftCard-frontendMentor/main/images/img-readme.png"
                link="https://github.com/HerculesCamara/nftCard-frontendMentor"
              />
              <Card
                title="Selic CDI"
                description="Know the current value of SELIC and CDI."
                bannerLink="https://user-images.githubusercontent.com/39931772/224522360-3b60a986-6f21-41a1-9dfb-d64ca70afe05.png"
                link="https://github.com/HerculesCamara/SelicCDI"
              />
              <Card
                title="Loading the Game"
                description="My academic project from IFMT."
                bannerLink="https://user-images.githubusercontent.com/39931772/224520189-444569d2-a757-402c-a54e-8e8abc146b71.png"
              />
              <Card
                title="CCS Battle - 99"
                description="My Project#4 on CCS Battle."
                bannerLink="https://shots.codepen.io/HerculesCamara/pen/abjyeMM-512.webp?version=1673899905"
                link="https://codepen.io/HerculesCamara/details/abjyeMM"
              />
              <Card
                title="CCS Battle - 113"
                description="My Project#1 on CCS Battle."
                bannerLink="https://shots.codepen.io/HerculesCamara/pen/BaPwppv-512.webp?version=1674048164"
                link="https://codepen.io/HerculesCamara/pen/BaPwppv"
              />
              <Card
                title="CCS Battle - 86"
                description="My Project#3 on CCS Battle."
                bannerLink="https://shots.codepen.io/HerculesCamara/pen/wvxroGr-512.webp?version=1673953448"
                link="https://codepen.io/HerculesCamara/pen/wvxroGr"
              />
              <Card
                title="CCS Battle - 94"
                description="My Project#5 on CCS Battle."
                bannerLink="https://shots.codepen.io/HerculesCamara/pen/OJwxbJp-512.webp?version=1673950147"
                link="https://codepen.io/HerculesCamara/pen/OJwxbJp"
              />
            </AllProjectsContent>
          </AllProjectsContainer>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default Projects

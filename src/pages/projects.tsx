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
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/autocalc/c8a8c4b791f802b14d6d28112a0905b2d1125443/src/assets/images/logo.svg"
              />
              <Card
                title="Selic CDI"
                description="Saiba a taxa da Selic e do CDI a todo momento."
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/SelicCDI/main/src/assets/Selic%26CDI.png"
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
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/autocalc/c8a8c4b791f802b14d6d28112a0905b2d1125443/src/assets/images/logo.svg"
              />
              <Card
                title="NFT Card"
                description="This is a solution to the NFT preview card component challenge on Frontend Mentor."
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/nftCard-frontendMentor/main/images/img-readme.png"
              />
              <Card
                title="Selic CDI"
                description="Saiba a taxa da Selic e do CDI a todo momento."
                bannerLink="https://raw.githubusercontent.com/HerculesCamara/SelicCDI/main/src/assets/Selic%26CDI.png"
              />
              <Card
                title="Loading the Game"
                description="Projeto acadêmico desenvolvido durante meu estudo no IFMT para a disciplina de Desenvolvimento de Software."
                bannerLink="https://loading-the-game.vercel.app/images/logoLTG2.1%20completo%20preto%20vermelho.png"
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

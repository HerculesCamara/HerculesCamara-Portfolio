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
              <Card />
              <Card />
              <Card />
            </Carroussel>
          </TopProjects>
          <AllProjectsContainer>
            <AllProjectsHeader>
              <h1>All Projects</h1>
              <Filter />
            </AllProjectsHeader>
            <AllProjectsContent>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </AllProjectsContent>
          </AllProjectsContainer>
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default Projects

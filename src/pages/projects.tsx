import { Card, cardProps } from "@/components/Card";
import { ContentSelector } from "@/components/ContentSelector";
import { Filter } from "@/components/Filter";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPrismicClient } from "@/services/prismic";
import {
  AllProjectsContainer,
  AllProjectsContent,
  AllProjectsHeader,
  Carroussel,
  Container,
  Content,
  TopProjects,
} from "@/styles/projects";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface ProjectProps {
  projects?: cardProps[];
}

export const getServerSideProps: GetServerSideProps<ProjectProps> = async ({
  query,
}) => {
  const category = query.category;
  const client = getPrismicClient();

  const prismicProjects = await client.getAllByType(
    `${category ? `project-${category}` : "project"}`,
    {
      pageSize: 100,
    }
  );

  const projects: cardProps[] = prismicProjects?.map((project) => ({
    id: project.uid || undefined,
    title: project.data.title,
    bannerLink: project.data.banner_link?.url || null,
    link: project.data.project_link?.url || null,
    description: project.data.content,
    topProject: project.data.top_project
  }));

  return {
    props: {
      projects,
    },
  };
};



const Projects: NextPage<ProjectProps> = ({ projects }) => {

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
              {projects?.map((project) => ( 
                project.topProject ? 
                  <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    bannerLink={project.bannerLink}
                    link={project.link}
                  />
                : null
                ))}
            </Carroussel>
          </TopProjects>
          <AllProjectsContainer>
            <AllProjectsHeader>
              <h1>All Projects</h1>
              {/* <Filter /> */}
            </AllProjectsHeader>
            <AllProjectsContent>
              {projects?.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  bannerLink={project.bannerLink}
                  link={project.link}
                />
              ))}
            </AllProjectsContent>
          </AllProjectsContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Projects;

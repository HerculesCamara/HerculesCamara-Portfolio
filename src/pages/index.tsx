import type { NextPage } from "next";
import { Header } from "../components/Header";
import {
  About,
  Container,
  Im,
  Projects,
  Contact,
  Content,
  Apresentation,
  Buttons,
  MyPicture,
} from "../styles/Home";

import { Footer } from "../components/Footer";
import Image from "next/image";

import arrow from "@/assets/arrow-right.svg";
import picture from "@/assets/me-home.png";
import Head from "next/head";

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
              I&apos;m <span>Hércules Câmara</span>
            </Im>
            <About>
              Web developer and UI/UX designer.
            </About>
            <Buttons>
              <Projects as="a" href="/projects">
                Projects
              </Projects>
              <Contact as="a" href="/contact">
                Contact <Image src={arrow} alt="" />
              </Contact>
            </Buttons>
          </Apresentation>
          <MyPicture>
            <Image src={picture} />
          </MyPicture>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;

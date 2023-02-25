import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { BurguerMenu, Container, Content, CssBattle, FrontendMentor, GitHub, Instagram, Item, LinkedIn, List, MobileContent, NavigationContainer, Rocketseat } from './styles'

export function Footer() {
  const { route } = useRouter()
  const [ toggle, setToggle ] = useState(false)

  return (
    <Container>
      <Content>
        <Instagram
          href="https://www.instagram.com/herculescamara_/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </Instagram>
        <LinkedIn
          href="https://www.linkedin.com/in/herculescamara/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </LinkedIn>
        <GitHub
          href="https://github.com/HerculesCamara"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </GitHub>
        <CssBattle
          href="https://cssbattle.dev/player/herculescamara"
          target="_blank"
          rel="noreferrer"
        >
          CSS Battle
        </CssBattle>
        <Rocketseat
          href="https://app.rocketseat.com.br/me/hercules-camara"
          target="_blank"
          rel="noreferrer"
        >
          Rocketseat
        </Rocketseat>
        <FrontendMentor
          href="https://www.frontendmentor.io/profile/HerculesCamara"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </FrontendMentor>
      </Content>
      <MobileContent>
        <a
          href="https://www.linkedin.com/in/herculescamara/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/herculescamara_/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://github.com/HerculesCamara"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <BurguerMenu onClick={() => setToggle(!toggle)} isOpen={toggle}>
          <NavigationContainer isOpen={toggle}>
            <List>
                <Item>
                    <a href="https://cssbattle.dev/player/herculescamara" target="_blank" rel="noreferrer">CSS Battle</a>
                </Item>
                <Item>
                    <a href="https://app.rocketseat.com.br/me/hercules-camara" target="_blank" rel="noreferrer">Rocketseat</a>
                </Item>
                <Item>
                    <a href="https://www.frontendmentor.io/profile/HerculesCamara" target="_blank" rel="noreferrer">Frontend Mentor</a>
                </Item>
            </List>
          </NavigationContainer>
        </BurguerMenu>
      </MobileContent>
    </Container>
  )
}

import { Container, Content, CssBattle, FrontendMentor, GitHub, Instagram, LinkedIn, Rocketseat } from './styles'

export function Footer() {
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
    </Container>
  )
}

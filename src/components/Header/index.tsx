import { Container, Links, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>Hércules C.</Logo>
      <Links>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Setup</a>
        <a href="">Contact</a>
      </Links>
    </Container>
  )
}

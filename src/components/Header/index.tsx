import { Container, Links, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>
        <a href="./">Hércules C.</a>
      </Logo>
      <Links>
        <a href="../work-in">Projects</a>
        <a href="../about">About</a>
        <a href="../setup">Setup</a>
        <a href="../contact">Contact</a>
      </Links>
    </Container>
  )
}

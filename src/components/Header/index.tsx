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
        <a href="../work-in">Setup</a>
        <a href="../work-in">Contact</a>
      </Links>
    </Container>
  )
}

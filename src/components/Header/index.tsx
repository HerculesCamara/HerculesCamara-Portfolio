import { Navigation } from '../Navigation'

import { Container, Logo } from './styles'

export function Header() {
  /* function handleSetStyle() {
    if (document.URL.includes('contact')) {
      
      let element = document.getElementById('contact')
      element?.classList.add("active");
    }
  } */

  return (
    <Container>
      <Logo>
        <a href="./">Hércules C.</a>
      </Logo>
      <Navigation />
    </Container>
  )
}

import Link from 'next/link'
import { Navigation } from '../Navigation'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>
        <Link href="/">Hércules C.</Link>
      </Logo>
      <Navigation />
    </Container>
  )
}

import Link from 'next/link'
import { BurguerMenu } from '../BurguerMenu'
import { Navigation } from '../Navigation'

import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>
        <Link href="/">Hércules C.</Link>
      </Logo>
      <Navigation />
      <BurguerMenu />
    </Container>
  )
}

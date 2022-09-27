import { Item, List, NavigationContainer } from "./styles";

import { useRouter } from 'next/router'
import Link from "next/link";

export function Navigation(){

  const { route } = useRouter()

  return (
    <NavigationContainer>
      <List>
        <Item isActive={route === '/projects'}>
          <Link href="work-in">Projects</Link>
        </Item>
        <Item isActive={route === '/about'}>
          <Link href="about">About</Link>
        </Item>
        <Item isActive={route === '/setup'}>
          <Link href="setup">Setup</Link>
        </Item>
        <Item isActive={route === '/contact'}>
          <Link href="contact">Contact</Link>
        </Item>
      </List>
    </NavigationContainer>
  )
}
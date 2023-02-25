import { Burguer, Container, Item, List, NavigationContainer } from "./styles";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

export function BurguerMenu(){
    const [toggle, setToggle] = useState(false)
    
    const { route } = useRouter()
    return (
        <Container>
            <Burguer onClick={() => setToggle(!toggle)} isOpen={toggle}>
            </Burguer>
            <NavigationContainer isOpen={toggle}>
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
        </Container>
    )
}
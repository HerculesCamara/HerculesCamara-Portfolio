import styled from 'styled-components'

import burguerMenu from "@/assets/burguer-menu-icon.svg"
import burguerMenuClose from "@/assets/burguer-menu-close-icon.svg"

export const Container = styled.footer`
  width: 100%;

  bottom: 0;
`

export const Content = styled.footer`
  width: 100%;
  max-width: 56.25rem;
  margin-left: auto;
  margin-right: auto;

  padding-bottom: 4.375rem;

  display: flex;
  gap: 1rem;
  justify-content: space-between;

  a {
    color: var(--gray-medium);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Instagram = styled.a`
  transition: all 2s;

  background-image: linear-gradient(90deg, transparent 0%, transparent 100%);
  :hover {
    background-image: linear-gradient(90deg, #5259cf 0%, #eb4c51 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }
`
export const LinkedIn = styled.a`
  transition: all 0.2s;
  :hover {
    color: #0077b5;
  }
`

export const GitHub = styled.a`
  transition: all 0.2s;
  :hover {
    color: var(--white);
  }
`

export const CssBattle = styled.a`
  transition: all 0.2s;
  :hover {
    color: #ffdf00;
  }
`

export const Rocketseat = styled.a`
  transition: all 0.2s;
  :hover {
    color: #aeaeb2;
  }
`
export const FrontendMentor = styled.a`
  transition: all 0.2s;
  :hover {
    color: var(--white);
  }
`
interface BurguerMenuProps {
  isOpen?: boolean
}

export const MobileContent = styled.div`
  padding-bottom: 4rem;
  max-width: 12.5rem;
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--gray-medium)
  }

  a {
    transition: filter 0.2s;
    :hover {
      filter: brightness(1.2);
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

export const BurguerMenu = styled.div<BurguerMenuProps>`
  width: 1.25rem;
  height: 1.25rem;
  background-image: url(${(props) => props.isOpen ? burguerMenuClose.src : burguerMenu.src});
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.8);

  cursor: pointer;
`

export const NavigationContainer = styled.div<BurguerMenuProps>`
  position: absolute;
  bottom: 0;
  width: 10rem;
  left: -8.7rem;
  top: -7rem;

  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  border-radius: 8px;
  overflow: hidden;
`

export const List = styled.ul`
  list-style-type: none;
    
  background-color:hsla(240,4%,9%,1);
  background-image:
  radial-gradient(at 120% 120%, hsla(194,50%,43%,0.3) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(240,4%,9%,0) 0px, transparent 50%);

  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
`

export const Item = styled.li`
  text-align: center;
  color: var(--gray-light);
  font-weight: 700;

  padding: 0.5rem;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: none;
    
  transition: filter 0.2s;
  background: transparent;
    
  :hover {
    background: rgba(33, 88, 105, 0.17);
    filter: brightness(2);
  }
`
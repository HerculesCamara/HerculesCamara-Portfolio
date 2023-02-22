import styled from "styled-components";
import burguerMenu from "@/assets/burguer-menu-icon.svg"
import burguerMenuClose from "@/assets/burguer-menu-close-icon.svg"

interface ListItemWrapperProps {
    isActive?: boolean
}

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 1;

    @media (min-width: 1000px) {
        display: none;
    }
`
interface BurguerProps {
    isOpen?: boolean
}

export const Burguer = styled.div<BurguerProps>`
    width: 2.5rem;
    height: 2.5rem;
    background-image: url(${(props) => props.isOpen ? burguerMenuClose.src : burguerMenu.src});
    background-repeat: no-repeat;
    content: '';
`

export const NavigationContainer = styled.div<BurguerProps>`
    position: absolute;
    bottom: 0;
    width: calc(100vw - 1px);
    left: calc(-100vw + 4.5rem );

    display: ${(props) => (props.isOpen ? 'block' : 'none')};

    top: 100%;   
`

export const List = styled.ul`
    list-style-type: none;
    
    /* border-radius: 0px 0px 16px 16px; */
    background-color:hsla(240,4%,9%,1);
    background-image:
    radial-gradient(at 120% 120%, hsla(194,50%,43%,0.3) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(240,4%,9%,0) 0px, transparent 50%);

    border-bottom: 1px solid rgb(255, 255, 255, 0.1);
`

export const Item = styled.li<ListItemWrapperProps>`
    text-align: center;
    color: var(--gray-light);
    font-weight: 700;

    padding: 0.5rem;

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    
    transition: filter 0.2s;
    background: ${(props) => props.isActive ? 'rgba(33, 88, 105, 0.17)' : 'transparent'};
    
    :hover {
        background: rgba(33, 88, 105, 0.17);
        filter: brightness(2);
    }
`
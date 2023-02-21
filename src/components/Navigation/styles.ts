import styled from 'styled-components'

interface ListItemWrapperProps {
  isActive?: boolean
}

export const NavigationContainer = styled.nav`
  /* margin-left: 6.75rem; */
  width: 100%;
  max-width: 32.25rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  list-style-type: none;
`

export const Item = styled.li<ListItemWrapperProps>`
  position: relative;

  a {
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ isActive }) =>
      isActive ? 'var(--gray-light)' : 'var(--gray-medium)'};

    transition: color 0.2s;

    :hover {
      color: var(--gray-light);

      /* ::before {
        content: '';
        width: 100%;
        height: 2px;
        background-image: linear-gradient(
          90deg,
          #378ba4 0%,
          rgba(129, 190, 206, 0) 100%
        );
        position: absolute;

        bottom: -8px;
      } */
    }
  }

  ::before {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};

    content: '';
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
      90deg,
      #378ba4 0%,
      rgba(129, 190, 206, 0) 100%
    );
    position: absolute;

    bottom: -8px;
  }
`

/* export const Link = styled.a`
  
` */

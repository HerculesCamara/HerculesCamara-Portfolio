import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  bottom: 0;

  @media (max-width: 1000px) {
    display: none;
  }
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
export const MobileContent = styled.div`
  
`
import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  max-height: 15rem;

  margin-top: auto;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: center;

  h1 {
    background-image: linear-gradient(90deg, #378ba4 0%, #81bece 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }

  span {
    font-size: 1.25rem;
    color: var(--gray-medium);

    margin-top: 1rem;
  }
`

export const SocialMedias = styled.footer`
  display: flex;
  gap: 1rem;

  justify-content: center;

  a {
    svg {
      width: 2rem;
      height: 2rem;
      fill: var(--gray-medium);

      transition: fill 0.2s;

      :hover {
        fill: var(--gray-light);
      }
    }
  }
`

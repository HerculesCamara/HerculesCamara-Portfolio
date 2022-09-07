import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  padding-top: 7.125rem;
  padding-bottom: 7.125rem;
  padding-left: 6.75rem;
  padding-right: 6.75rem;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 65.25rem;

  margin-left: auto;
  margin-right: auto;
`

export const Apresentation = styled.div`
  max-width: 35.25rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--gray-light);

    span {
      background-image: linear-gradient(90deg, #fc8b5e 5%, #c0587e 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--gray-medium);

    margin-top: 2rem;
  }
`

export const Setup = styled.div`
  margin-top: 3rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 700;

    span {
      background: linear-gradient(
        90deg,
        #e1e1e6 18.75%,
        rgba(192, 88, 126, 0.56) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--gray-medium);

    margin-top: 0.5rem;

    :first-of-type {
      margin-top: 2rem;
    }
  }

  ul {
    margin-top: 0.5rem;

    padding-left: 2rem;

    li {
      font-size: 1.25rem;
      font-weight: 200;
      color: var(--gray-medium);
    }
  }
`
export const Mobile = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    display: none;
  }
`
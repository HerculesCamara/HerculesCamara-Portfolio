import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  padding: 7.125rem 6.75rem;

  @media (max-width: 700px) {
    padding: 2.5rem 2rem;
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
    color: var(--gray-light);

    margin-top: 2rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;

      margin-top: 1.25rem;
    }
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
    color: var(--gray-light);

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
      color: var(--gray-light);
    }
  }

  @media (max-width: 700px) {
    margin-top: 2.5rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    }

    ul {
      li {
        font-size: 1rem;
      }
    }
  }
`

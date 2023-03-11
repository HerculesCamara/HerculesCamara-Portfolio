import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  padding-top: 7.125rem;
  padding-bottom: 7.125rem;
  padding-left: 6.75rem;
  padding-right: 6.75rem;

  @media (max-width: 1000px) {
    padding: 2.5rem 2rem;
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 65.25rem;

  margin-left: auto;
  margin-right: auto;
`

export const Me = styled.div`
  display: flex;
  gap: 1rem;

  justify-content: space-between;
`

export const Apresentation = styled.div`
  width: 100%;
  max-width: 35.25rem;
  padding-bottom: 2rem;

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

      white-space: nowrap;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--gray-medium);

    margin-top: 1rem;

    :first-of-type {
      margin-top: 2rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;

      margin-top: 0.5rem;

      :first-of-type {
        margin-top: 1.25rem;
      }
    }
  }
`

export const Picture = styled.div`
  margin-top: -0.5rem;

  image {
    max-width: 18.5rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const Career = styled.div`
  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: var(--gray-light);
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.75rem;
    }
  }
`

export const TimeLine = styled.div`
  position: relative;

  margin-top: 2rem;

  ::before {
    width: 2px;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(180deg, #e1e1e6 0%, #e1e1e600 100%);
    content: '';
    left: 14px;
  }

  @media (max-width: 600px) {
    margin-top: 1.25rem;
  }
`

export const Date = styled.div`
  position: relative;
  padding-left: 40px;

  margin-top: 40px;

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--gray-light);

    span {
      font-weight: 300;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-medium);

    span {
      font-weight: 300;
    }
  }

  ::before {
    width: 10px;
    height: 10px;

    border-radius: 50%;
    top: 7px;
    left: 10px;

    content: ' ';
    position: absolute;
    background: var(--gray-light);
  }

  :first-of-type {
    padding-top: 10px;
    margin-top: 0px;

    ::before {
      top: 17px;
    }
  }

  :last-of-type {
    margin-top: 80px;
    padding-bottom: 20px;
  }

  @media (max-width: 600px) {
    h4 {
      font-size: 1rem;
    }
  }
`

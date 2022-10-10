import styled from 'styled-components'

export const Container = styled.main`
  padding: 6.75rem;
  flex: 1;

  @media (max-width: 1000px) {
    display: none;
  }
`
export const Content = styled.div`
  max-width: 65.375rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Apresentation = styled.div``

export const Im = styled.div`
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--gray-light);

  span {
    font-size: 3.125rem;

    background-image: linear-gradient(90deg, #378ba4 0%, #81bece 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
  }
`

export const About = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--gray-light);

  margin-top: 1.25rem;

  a {
    text-decoration: underline;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.88);
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 2.125rem;

  margin-top: 3rem;
`

export const Projects = styled.button`
  padding: 1rem 3.125rem;

  font-size: 1.25rem;
  font-weight: 700;
  color: #81bece;

  position: relative;

  background: transparent;
  border: none;

  transition: all 0.2s;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(135deg, #205767, #81bece);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  :hover {
    cursor: pointer;

    filter: brightness(0.9);

    ::before {
      /* -webkit-animation: AnimationName 1s ease infinite;
      -moz-animation: AnimationName 1s ease infinite; */
      /* animation: AnimationName 5s ease infinite; */

      /* @-webkit-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @-moz-keyframes AnimationName {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      } */
      @keyframes AnimationName {
        100% {
          background: linear-gradient(135deg, #205767, #81bece);
        }
        /* 0% {
          background: linear-gradient(135deg, #205767, #81bece);
        }
        10% {
          background: linear-gradient(155deg, #205767, #81bece);
        }
        20% {
          background: linear-gradient(175deg, #205767, #81bece);
        }
        30% {
          background: linear-gradient(195deg, #205767, #81bece);
        }
        40% {
          background: linear-gradient(215deg, #205767, #81bece);
        }
        50% {
          background: linear-gradient(235deg, #205767, #81bece);
        }
        60% {
          background: linear-gradient(255deg, #205767, #81bece);
        }
        70% {
          background: linear-gradient(275deg, #205767, #81bece);
        }
        80% {
          background: linear-gradient(295deg, #205767, #81bece);
        }
        90% {
          background: linear-gradient(315deg, #205767, #81bece);
        }
        100% {
          background: linear-gradient(335deg, #205767, #81bece);
        } */
      }
    }
  }
`

export const Contact = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;

  padding: 1rem 2rem;

  border: none;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 1rem;

  background: linear-gradient(94.98deg, #036280 0%, #51a0b5 100%);

  transition: filter 0.2s;

  :hover {
    cursor: pointer;

    filter: brightness(1.1);
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

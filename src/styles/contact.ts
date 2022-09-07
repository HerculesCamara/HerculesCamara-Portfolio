import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;

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
    color: var(--gray-light);

    margin-top: 2rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 3rem;
`
export const Copy = styled.button`
  padding: 1rem 3.125rem;

  font-size: 1.25rem;
  font-weight: 700;
  color: #81bece;

  position: relative;

  background: transparent;
  border: none;

  /* transition: all 1s; */

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

    ::before {
      background: linear-gradient(135deg, #81bece, #205767);
    }
  }
`

export const Send = styled.button`
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

  :hover {
    cursor: pointer;
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
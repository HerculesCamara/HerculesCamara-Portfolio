import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 16.5rem;
  max-width: 16.5rem;
  height: 16.5rem;

  background: var(--gray-dark-medium);

  border: none;
  border-radius: 8px;

  cursor: pointer;

  transition: filter 0.2s;

  :hover {
    filter: brightness(1.1);
  }

  @media (max-width: 500px) {
    width: 100%;
    min-width: 16.5rem;
    max-width: 18rem;
    
    /* height: auto;
    min-height: 16.5rem; */
  }
`

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  max-height: 8.125rem;

  border-radius: 8px 8px 0px 0px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Content = styled.div`
  padding: 1.25rem 0.75rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--gray-light);
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--gray-medium);

    margin-top: 0.25rem;
  }
`

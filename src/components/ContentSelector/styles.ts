import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  hr {
    width: 1px;
    height: 25px;
    border: none;
    background-image: linear-gradient(
      180deg,
      #378ba4 0%,
      rgba(129, 190, 206, 0.3) 100%
    );
  }
`

export const Selector = styled.button`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--gray-medium);

  background: transparent;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  transition: color 0.2s;

  :first-of-type {
    background: var(--gray-dark-medium);
    color: var(--gray-light);
    padding: 0.5rem 1.375rem;
  }

  :hover {
    color: var(--gray-light);
  }
`
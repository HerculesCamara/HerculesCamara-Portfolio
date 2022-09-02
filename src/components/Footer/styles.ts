import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  bottom: 0;
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

    transition: color 0.2s;
    :hover {
      color: var(--gray-light);
    }
  }
`

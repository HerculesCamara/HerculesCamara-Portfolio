import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;

  padding-top: 4.875rem;
  padding-left: 6.75rem;
  padding-right: 6.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  white-space: nowrap;

  background-image: linear-gradient(90deg, #378ba4 0%, #81bece 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
`
export const Links = styled.div`
  width: 100%;
  max-width: 32.25rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  margin-left: 6.75rem;

  a {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--gray-medium);

    transition: color 0.2s;

    :hover {
      color: var(--gray-light);
    }
  }
`

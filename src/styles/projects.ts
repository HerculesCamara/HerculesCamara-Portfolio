import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  padding: 4.75rem 6.75rem;

  @media (max-width: 1100px) {
    padding: 2.5rem 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 70.75rem;

  margin-left: auto;
  margin-right: auto;
`

export const TopProjects = styled.div`
  margin-top: 2.625rem;

  > h1 {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--gray-light);
  }
`

export const Carroussel = styled.div`
  margin-top: 2.25rem;

  display: flex;
  gap: 1.5rem;

  overflow-x: auto;
`

export const AllProjectsContainer = styled.div`
  margin-top: 4rem;
`

export const AllProjectsHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.375rem;
    font-weight: 700;
    color: var(--gray-light);
  }
`

export const AllProjectsContent = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.25rem;

  display: grid;
  justify-content: space-around;
  gap: 1.5rem;

  grid-template-columns: repeat(auto-fit, 16rem);
`

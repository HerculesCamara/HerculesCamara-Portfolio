import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-end;
`

interface FilterProps {
  isActive?: boolean
}

export const FilterButton = styled.button<FilterProps>`
  background: ${(props) =>
    props.isActive ? 'var(--gray-dark-medium)' : 'transparent'};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;

  font-size: 1.125rem;
  font-weight: 700;
  color: var(--gray-medium);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: color 0.2s;

  svg {
    transform: scaleX(-1);
    fill: var(--gray-medium);

    width: 0.875rem;
    height: 1rem;

    transition: fill 0.1s;
  }

  :hover {
    color: var(--gray-light);
    background: var(--gray-dark-medium);

    svg {
      fill: var(--gray-light);
    }
  }
`

export const List = styled.ul<FilterProps>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  list-style-type: none;

  position: absolute;

  background: var(--gray-dark-medium);

  top: calc(100% + 2px);
  border: none;
  border-radius: 4px;
  overflow: hidden;

  z-index: 1;
`

export const Item = styled.li`
  color: var(--gray-light);

  font-size: 1.125rem;
  font-weight: 700;
  text-align: right;

  padding: 0.5rem 1rem 0.5rem 3rem;

  width: 100%;
  background: var(--gray-dark-medium);
  white-space: nowrap;

  transition: filter 0.2s;

  cursor: pointer;

  :hover {
    filter: brightness(1.3);
  }
`

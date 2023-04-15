import styled from "styled-components";

interface SelectorProps {
  isActive?: boolean;
}

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
`;

export const Selector = styled.a<SelectorProps>`
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  /* min-width: 100px; */
  text-align: center;

  cursor: pointer;
  transition: color 0.2s;

  background: ${({ isActive }) =>
    isActive ? " var(--gray-dark-medium)" : "transparent"};
  color: ${({ isActive }) =>
    isActive ? "var(--gray-light)" : "var(--gray-medium);"};
  padding: 0.5rem 1.375rem;

  :hover {
    color: var(--gray-light);
  }
`;

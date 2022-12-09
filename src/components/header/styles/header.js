import styled from 'styled-components/macro';

export const Container = styled.header`
  background-color: #ffffff;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  min-height: 10vh;
`;

export const Logo = styled.h1`
  font-size: 30px;
  color: #0090ff;
`;

export const Nav = styled.nav`
  padding: 0 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Group = styled.ul`
  gap: 24px;
  display: flex;
  align-items: center;
`;

export const TextLink = styled.li`
  font-size: 17px;
  list-style: none;
  color: ${({ active }) => (active ? '#121212' : '#898989')};
`;

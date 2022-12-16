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
  flex: 0.5;
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
  flex: 0.5;
`;

export const TextLink = styled.li`
  font-size: 17px;
  list-style: none;
  color: ${({ active }) => (active ? '#0090ff' : '#898989')};
`;

export const MaterialIcon = styled.img`
  width: 90%;
  object-fit: contain;
`;

export const Holder = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const IconButton = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #fff;
  align-self: flex-end;
  border: 0;
`;

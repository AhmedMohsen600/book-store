import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h4`
  color: #888888;
  font-size: 20px;
`;

export const FormBase = styled.form`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 16px;
  border: 1px solid #e8e8e8;
  width: 100%;
  flex: 2;
`;

export const SubmitButton = styled.button`
  padding: 16px 0;
  cursor: pointer;
  background: #0290ff;
  border: 0;
  color: #fff;
  font-size: 16px;
  flex: 1;
`;

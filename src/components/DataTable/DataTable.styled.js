import styled from 'styled-components';

export const TableRow = styled.tr`
  :hover > td > button {
    display: inline-block;
  }
`;

export const Button = styled.button`
  display: none;
`;

export const Wrapper = styled.div`
  max-width: 700px;
`;

export const ActionColumn = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

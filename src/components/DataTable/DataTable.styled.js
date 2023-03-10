import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const TableRow = styled.tr`
  :hover > td > button {
    display: inline-block;
  }
`;

export const StyledButton = styled(Button)`
  display: none;
  padding: 4px 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledData = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const ActionColumn = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  min-width: 155px;
  height: 40px;
`;

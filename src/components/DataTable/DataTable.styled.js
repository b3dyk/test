import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const TableRow = styled.tr`
  :hover > td > button {
    display: inline-block;
  }
`;

export const StyledButton = styled(Button)`
  display: none;
`;

export const Wrapper = styled.div`
  max-width: 700px;
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
  height: 50px;
`;

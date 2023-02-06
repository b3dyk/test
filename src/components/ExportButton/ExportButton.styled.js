import { CSVLink } from 'react-csv';
import styled from 'styled-components';

export const StyledExport = styled(CSVLink)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  min-width: 100px;
  background-color: #0d6efd;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  :hover {
    color: #fff;
    background-color: #0b5ed7;
  }
`;

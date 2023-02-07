import { CSVLink } from 'react-csv';
import styled from 'styled-components';

export const StyledExport = styled(CSVLink)`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background-color: var(--color-btn-primary);
  color: var(--color-text-white);
  padding: 7px 16px;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  :hover,
  :focus {
    color: var(--color-text-white);
    background-color: var(--color-btn-primary-hover);
  }
`;

import { useSelector } from 'react-redux';
import { getFilteredTransactions } from 'redux/selectors';
import { StyledExport } from './ExportButton.styled';

export const ExportButton = () => {
  const filteredData = useSelector(getFilteredTransactions);
  return (
    <StyledExport data={filteredData} filename={'transactions'} target="_blank">
      Export
    </StyledExport>
  );
};

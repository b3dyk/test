import { useSelector } from 'react-redux';
import { getFilter, getFilteredTransactions } from 'redux/selectors';
import { StyledExport } from './ExportButton.styled';

export const ExportButton = () => {
  const filteredData = useSelector(getFilteredTransactions);
  const filter = useSelector(getFilter);
  return (
    <StyledExport
      data={filteredData}
      filename={`transactions ${filter.status} ${filter.type}`}
      target="_blank"
    >
      Export
    </StyledExport>
  );
};

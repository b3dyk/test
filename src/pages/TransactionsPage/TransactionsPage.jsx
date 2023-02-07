import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getTransactions } from 'redux/selectors';
import { fetchTransactions } from 'redux/transactions/operations';
import { useEffect } from 'react';
import { Filters } from 'components/Filters/Filters';
import { ImportButton } from 'components/ImportButton/ImportButton';
import { ExportButton } from 'components/ExportButton/ExportButton';
import { DataTable } from 'components/DataTable/DataTable';
import { BtnsGroup, ControlsGroup, Wrapper } from './TransactionsPage.styled';

export const TransactionsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const data = useSelector(getTransactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <Wrapper>
      <ControlsGroup>
        <Filters />

        <BtnsGroup>
          <ImportButton />

          <ExportButton />
        </BtnsGroup>
      </ControlsGroup>

      {isLoading ? <p>Loading...</p> : data.length > 0 && <DataTable />}
    </Wrapper>
  );
};

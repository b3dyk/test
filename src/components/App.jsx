import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import CSVReader from 'react-csv-reader';
import { DataTable } from './DataTable/DataTable';
import { addTransactions } from 'redux/transactions/transactionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from './Filters/Filters';
import { ExportButton } from './ExportButton/ExportButton';
import { getTransactions } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(getTransactions);

  return (
    <div>
      <div>Header</div>
      <div>Transactions</div>
      <div>
        <h2>Data</h2>

        <Filters />

        <CSVReader onFileLoaded={data => dispatch(addTransactions(data))} />

        <ExportButton />

        {data.length !== 0 && <DataTable />}
      </div>
    </div>
  );
};

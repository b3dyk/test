import { DataTable } from './DataTable/DataTable';
import { useSelector } from 'react-redux';
import { Filters } from './Filters/Filters';
import { ExportButton } from './ExportButton/ExportButton';
import { getTransactions } from 'redux/selectors';
import { CSVReader } from './CSVReader/CSVReader';

export const App = () => {
  const data = useSelector(getTransactions);

  return (
    <div>
      <div>Header</div>
      <div>Transactions</div>
      <div>
        <h2>Data</h2>

        <Filters />

        <CSVReader />

        <ExportButton />

        {data.length !== 0 && <DataTable />}
      </div>
    </div>
  );
};

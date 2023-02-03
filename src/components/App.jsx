import { useState } from 'react';
import CSVReader from 'react-csv-reader';

export const App = () => {
  const [data, setData] = useState(null);
  return (
    <div>
      <div>Header</div>
      <div>Transactions</div>
      <div>
        <h2>Data</h2>
        <input type="text" list="status" />
        <datalist id="status">
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </datalist>
        <input type="text" list="type" />
        <datalist id="type">
          <option>Refill</option>
          <option>Withdrawal</option>
        </datalist>
        <CSVReader onFileLoaded={data => setData(data)} />
        <button type="button">Export</button>
        {data && (
          <table>
            <thead>
              <tr>
                {data[0]?.map(item => (
                  <th key={item}>{item}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(1, data.length).map(row => (
                <tr key={row[0]}>
                  {row.map(data => (
                    <td key={data}>{data}</td>
                  ))}
                  <td>
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>Pagination</div>
    </div>
  );
};

import { Button } from 'react-bootstrap';
import { useCSVReader } from 'react-papaparse';
import { useDispatch } from 'react-redux';
import { addTransactions } from 'redux/transactions/transactionsSlice';

export const CSVReader = () => {
  const dispatch = useDispatch();
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={({ data }) => dispatch(addTransactions(data))}>
      {({ getRootProps, acceptedFile }) => (
        <>
          <div>
            <Button type="button" {...getRootProps()}>
              Import
            </Button>
            <div>{acceptedFile && acceptedFile.name}</div>
          </div>
        </>
      )}
    </CSVReader>
  );
};

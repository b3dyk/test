import { Button } from 'react-bootstrap';
import { useCSVReader } from 'react-papaparse';
import { useDispatch } from 'react-redux';
import { addTransactions } from 'redux/transactions/transactionsSlice';
import { FileName } from './ImportButton.styled';

export const ImportButton = () => {
  const dispatch = useDispatch();
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={({ data }) => dispatch(addTransactions(data))}>
      {({ getRootProps, acceptedFile }) => (
        <>
          <FileName>{acceptedFile && acceptedFile.name}</FileName>
          <Button type="button" {...getRootProps()}>
            Import
          </Button>
        </>
      )}
    </CSVReader>
  );
};

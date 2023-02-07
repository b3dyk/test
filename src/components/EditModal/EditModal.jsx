import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactions } from 'redux/selectors';
import { editStatus } from 'redux/transactions/transactionsSlice';
import { BtnWrapper, InputWrapper, Label } from './EditModal.styled';

export const EditModal = ({ id, onClose }) => {
  const transactions = useSelector(getTransactions);
  const [transactionSatus, setTransactionSatus] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editStatus({ id, status: transactionSatus }));
    onClose(false);
  };

  const getStatus = () => {
    const idx = transactions.findIndex(item => item[0] === id);
    return transactions[idx][1];
  };

  const status = getStatus();

  return (
    <div>
      <h4>Set transaction status</h4>
      <InputWrapper>
        <Label>
          <input
            type="radio"
            name="status"
            value="Pending"
            disabled={status === 'Pending'}
            onChange={({ target: { value } }) => setTransactionSatus(value)}
          />
          <span>Pending</span>
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="Completed"
            disabled={status === 'Completed'}
            onChange={({ target: { value } }) => setTransactionSatus(value)}
          />
          <span>Completed</span>
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="Cancelled"
            disabled={status === 'Cancelled'}
            onChange={({ target: { value } }) => setTransactionSatus(value)}
          />
          <span>Cancelled</span>
        </Label>
      </InputWrapper>
      <BtnWrapper>
        <Button variant="success" type="submit" onClick={handleSave}>
          Save
        </Button>
        <Button variant="danger" type="button" onClick={() => onClose(false)}>
          Discard
        </Button>
      </BtnWrapper>
    </div>
  );
};

EditModal.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

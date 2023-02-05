import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editStatus } from 'redux/transactions/transactionsSlice';
import { BtnWrapper, InputWrapper, Label } from './EditModal.styled';

export const EditModal = ({ id, onClose }) => {
  const [transSatus, setTransSatus] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editStatus({ id, status: transSatus }));
    onClose(false);
  };

  return (
    <div>
      <h4>Set transaction status</h4>
      <InputWrapper>
        <Label>
          <input
            type="radio"
            name="status"
            value="Pending"
            onChange={({ target: { value } }) => setTransSatus(value)}
          />
          <span>Pending</span>
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="Completed"
            onChange={({ target: { value } }) => setTransSatus(value)}
          />
          <span>Completed</span>
        </Label>
        <Label>
          <input
            type="radio"
            name="status"
            value="Cancelled"
            onChange={({ target: { value } }) => setTransSatus(value)}
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

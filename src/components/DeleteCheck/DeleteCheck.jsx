import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transactions/transactionsSlice';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { BtnWrapper, Heading } from './DeleteCheck.styled';

export const DeleteCheck = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTransaction(id));
    onClose(false);
  };

  return (
    <>
      <Heading>Are you shure you want to delete this item?</Heading>
      <BtnWrapper>
        <Button variant="danger" type="button" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="success" type="button" onClick={() => onClose(false)}>
          No
        </Button>
      </BtnWrapper>
    </>
  );
};

DeleteCheck.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

import { useDispatch } from 'react-redux';
import {
  setFilterStatus,
  setFilterType,
} from 'redux/transactions/transactionsSlice';
import { FiltersGroup } from './Filters.styled';

export const Filters = () => {
  const dispatch = useDispatch();

  const onStatusChange = ({ target: { value } }) => {
    dispatch(setFilterStatus(value));
  };

  const onTypeChange = ({ target: { value } }) => {
    dispatch(setFilterType(value));
  };

  return (
    <FiltersGroup>
      <select name="status" onChange={onStatusChange} defaultValue="Status">
        <option disabled>Status</option>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <select name="status" onChange={onTypeChange} defaultValue="Type">
        <option disabled>Type</option>
        <option value="">All</option>
        <option value="Refill">Refill</option>
        <option value="Withdrawal">Withdrawal</option>
      </select>
    </FiltersGroup>
  );
};

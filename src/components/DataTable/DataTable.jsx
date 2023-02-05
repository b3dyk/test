import ReactPaginate from 'react-paginate';

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { ActionColumn, TableRow, Wrapper } from './DataTable.styled';
import { Modal } from 'components/Modal/Modal';
import { DeleteCheck } from 'components/DeleteCheck/DeleteCheck';
import { useDispatch, useSelector } from 'react-redux';
import { EditModal } from 'components/EditModal/EditModal';
import {
  getFilter,
  getFilteredTransactions,
  getTransactions,
} from 'redux/selectors';
import { setFilteredTrancactions } from 'redux/transactions/transactionsSlice';

export const DataTable = () => {
  const data = useSelector(getTransactions);
  const filter = useSelector(getFilter);
  const filteredTrans = useSelector(getFilteredTransactions);
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState('');
  const [clickedBtn, setClickedBtn] = useState('');
  const [modalShown, setModalShown] = useState(false);
  const [itemOffset, setItemOffset] = useState([]);
  const itemsPerPage = 20;

  useEffect(() => {
    const filteredTransactions = data.filter(item => {
      if (filter.status && !filter.type) {
        return item[1] === filter.status;
      }
      if (filter.type && !filter.status) {
        return item[2] === filter.type;
      }

      if (filter.status && filter.type) {
        return item[2] === filter.type && item[1] === filter.status;
      }

      return item;
    });

    dispatch(setFilteredTrancactions(filteredTransactions));
  }, [data, dispatch, filter.status, filter.type]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredTrans.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredTrans.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % filteredTrans.length;
    setItemOffset(newOffset);
  };

  const handleClick = ({ id, evt }) => {
    setCurrentId(id);
    setModalShown(true);
    setClickedBtn(evt.target.name);
  };

  return (
    <Wrapper>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {data[0]?.map(item => (
              <th key={item}>{item}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.slice(1, currentItems.length).map(row => (
            <TableRow key={row[0]}>
              {row.map(data => (
                <td key={data}>{data}</td>
              ))}
              <ActionColumn>
                <Button
                  variant="info"
                  type="button"
                  name="edit"
                  onClick={evt => handleClick({ id: row[0], evt })}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  type="button"
                  name="delete"
                  onClick={evt => handleClick({ id: row[0], evt })}
                >
                  Delete
                </Button>
              </ActionColumn>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {modalShown && (
        <Modal onClose={setModalShown}>
          {clickedBtn === 'delete' ? (
            <DeleteCheck id={currentId} onClose={setModalShown} />
          ) : (
            <EditModal id={currentId} onClose={setModalShown} />
          )}
        </Modal>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </Wrapper>
  );
};

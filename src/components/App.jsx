import { TransactionsPage } from 'pages/TransactionsPage/TransactionsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  );
};

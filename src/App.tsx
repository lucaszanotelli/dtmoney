import {Dashboard} from './components/Dashboard';
import {Header} from './components/Header';
import {useState} from 'react';
import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';


import { GlobalStyle } from './styles/global';
import {NewTransactionModal} from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
   setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
   setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header
	 onOpenNewTransactionModal={handleOpenTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
	 isOpen={isNewTransactionModalOpen}
	 onRequestClose={handleCloseTransactionModal}
      />
   </TransactionsProvider>
  );
}

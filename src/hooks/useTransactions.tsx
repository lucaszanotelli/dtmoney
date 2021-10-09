import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api"

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionID = number;

interface TransactionsProviderProps {
  children: ReactNode;
  }

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  deleteTransaction: (id: TransactionID) => void;
  }

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children  }: TransactionsProviderProps ) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
   api.get('transactions')
   .then(response => setTransactions(response.data.transactions))
  }, []);

   async function deleteTransaction(transactionID: TransactionID) {
     setTransactions([...transactions]
     .filter(filter =>
     filter !== transactions[transactions
     .findIndex(index => index.id === transactionID)]));
  }

   async function createTransaction(transactionInput: TransactionInput) {
  const response = await api.post('/transactions', {
  ...transactionInput, createdAt: new Date(),
  });
     const { transaction } = response.data;

     setTransactions([
     ...transactions, transaction,
     ]);

  }

  return (
     <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction}}>
	{children}
     </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
  }

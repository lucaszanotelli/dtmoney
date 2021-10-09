import {useTransactions} from "../../hooks/useTransactions";

import closeImg from '../../assets/close.svg';

import {Container} from "./styles";

export function TransactionsTable(){
  
  const { transactions } = useTransactions();
  const { deleteTransaction } = useTransactions();

  return(
  <Container>
     <table>
	<thead>
	   <tr>
	      <th>Título</th>
	      <th>Valor</th>
	      <th>Categoria</th>
	      <th>Data</th>
	   </tr>
	</thead>

	<tbody>
	   {transactions.map(transaction => (
	   <tr key={transaction.id}>
	      <td>{transaction.title}</td>
	      <td className={transaction.type}>
		 {new Intl.NumberFormat('pt-BR', {
		 style: 'currency',
		 currency: 'BRL'}).format(transaction.amount)}
	      </td>
	      <td>{transaction.category}</td>
	      <td>
		 {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
	   </td>
	   <td>
	      <button
	      className="delete-button"
	      onClick={() => deleteTransaction(transaction.id)}
	      type="button">
	      <img src={closeImg} alt="X"/></button>
	   </td>
	   </tr>
  ))}
	</tbody>
     </table>
  </Container>
  );
}

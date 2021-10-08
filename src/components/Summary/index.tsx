import {useTransactions} from '../../hooks/useTransactions';

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';

import {Container} from "./styles";

export function Summary(){
  const { transactions } = useTransactions();

   const summary = transactions.reduce((acc, transaction) => {
     if (transaction.type === "deposit") {
	acc.deposits += transaction.amount;
	acc.total += transaction.amount;
     } else {
	acc.withdraws += transaction.amount;
	acc.total -= transaction.amount;
     }
     if (acc.total < 0) {
	 acc.totalBackground = "highlight-red";
     } else {
	 acc.totalBackground = "highlight-green";
     }
	return acc;
  },
     {
	deposits: 0,
	withdraws: 0,
	total: 0,
	totalBackground: "highlight-green",
  })

	return(
  <Container>
     <div>
	<header>
	   <p>Entradas</p>
	   <img src={incomeImg} alt="Entradas"/>
	</header>
	<strong>
		 {new Intl.NumberFormat('pt-BR', {
		 style: 'currency',
		 currency: 'BRL'}).format(summary.deposits)}
     </strong>
     </div>
     <div>
	<header>
	   <p>Saídas</p>
	   <img src={outcomeImg} alt="Saídas"/>
	</header>
	<strong>- 
		 {new Intl.NumberFormat('pt-BR', {
		 style: 'currency',
		 currency: 'BRL'}).format(summary.withdraws)}
     </strong>
     </div>
     <div className={summary.totalBackground}>
	<header>
	   <p>Total</p>
	   <img src={totalImg} alt="Total"/>
	</header>
	<strong>
		 {new Intl.NumberFormat('pt-BR', {
		 style: 'currency',
		 currency: 'BRL'}).format(summary.total)}
     </strong>
     </div>
  </Container>
	)
};

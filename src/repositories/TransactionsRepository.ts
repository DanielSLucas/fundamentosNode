import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionCreateDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const reducer = (acc: Balance, obj: Transaction): Balance => {
      const key = obj.type;
      if (!acc[key]) {
        acc[key] = 0;
      }

      acc[key] += Number(obj.value);
      return acc;
    };

    const totais = this.transactions.reduce(reducer, {});
    const { income = 0 } = totais;
    const { outcome = 0 } = totais;
    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: TransactionCreateDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;

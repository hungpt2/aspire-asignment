import { PAYMENT_TYPE, TRANSACTION_TYPE } from '../constant';

export interface ITransaction {
  id: number;
  label: string;
  date: string;
  paymentType: PAYMENT_TYPE;
  amount: number;
  currency: string;
  color: string;
  transactionType: TRANSACTION_TYPE;
}

import { IAvailableBalance, ICard } from '@/shared/models';
import { PAYMENT_TYPE, TRANSACTION_TYPE } from '@/shared/constant';
import BaseApi from './config/Base';
import { ITransaction } from '@/shared/models/transaction';

export default class Common extends BaseApi {
  // private baseUrl: string = 'common';

  public async getAvailableBalance(): Promise<IAvailableBalance> {
    // const res = await this.actions.get(this.baseUrl + '/get');
    // return res.data;
    return {
      currency: 'S$',
      balance: '3,000',
    };
  }

  public async getListCard(): Promise<ICard[]> {
    // const res = await this.actions.get(this.baseUrl + '/get');
    // return res.data;
    return [
      {
        id: 1,
        customerName: 'Mark Henry',
        cardNumber: '1234567867892020',
        expired: '12/20',
        cardColor: '#01D167',
      },
      {
        id: 2,
        customerName: 'Mark Henry 2',
        cardNumber: '1234567867892020',
        expired: '12/20',
        cardColor: '#3052AD',
      },
      {
        id: 3,
        customerName: 'Mark Henry 3',
        cardNumber: '1234567867892020',
        expired: '12/20',
        cardColor: '#01D167',
      },
    ];
  }

  public async getListTransaction(): Promise<ITransaction[]> {
    // const res = await this.actions.get(this.baseUrl + '/get');
    // return res.data;
    return [
      {
        id: Math.floor(Math.random() * 999999),
        label: 'Hamleys',
        date: '20 May 2020',
        transactionType: TRANSACTION_TYPE.STORAGE,
        paymentType: PAYMENT_TYPE.REFUND,
        amount: 150,
        currency: 'S$',
        color: '',
      },
      {
        id: Math.floor(Math.random() * 999999),
        label: 'Hamleys',
        date: '20 May 2020',
        transactionType: TRANSACTION_TYPE.TRAVEL,
        paymentType: PAYMENT_TYPE.CHARGE,
        amount: 150,
        currency: 'S$',
        color: '',
      },
      {
        id: Math.floor(Math.random() * 999999),
        label: 'Hamleys',
        date: '20 May 2020',
        transactionType: TRANSACTION_TYPE.BILL,
        paymentType: PAYMENT_TYPE.CHARGE,
        amount: 150,
        currency: 'S$',
        color: '',
      },
      {
        id: Math.floor(Math.random() * 999999),
        label: 'Hamleys',
        date: '20 May 2020',
        transactionType: TRANSACTION_TYPE.STORAGE,
        paymentType: PAYMENT_TYPE.CHARGE,
        amount: 150,
        currency: 'S$',
        color: '',
      },
    ];
  }
}

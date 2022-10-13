export interface ICard {
  id: number;
  customerName: string;
  cardNumber: string;
  expired: string;
  cardColor: string;
}

export interface IAvailableBalance {
  currency: string;
  balance: string;
}

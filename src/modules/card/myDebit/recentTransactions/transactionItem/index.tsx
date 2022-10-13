import FileStorageIcon from '@/assets/icons/FileStorage';
import FinanceIcon from '@/assets/icons/Finance';
import FlightIcon from '@/assets/icons/Flight';
import MegaPhoneIcon from '@/assets/icons/MegaPhone';
import NextIcon from '@/assets/icons/Next';
import { PAYMENT_TYPE, TRANSACTION_TYPE } from '@/shared/constant';
import { ITransaction } from '@/shared/models/transaction';
import { Vue, Component, Prop } from 'vue-property-decorator';
import './index.scss';

@Component({
  name: 'transaction-item',
  components: {
    FileStorageIcon,
    FlightIcon,
    MegaPhoneIcon,
    FinanceIcon,
    NextIcon,
  },
})
export default class TransactionItem extends Vue {
  @Prop() private readonly data!: ITransaction;

  private paymentMapping = {
    [PAYMENT_TYPE.REFUND]: 'Refund',
    [PAYMENT_TYPE.CHARGE]: 'Charge',
  };

  private amountMapping = {
    [PAYMENT_TYPE.REFUND]: '+',
    [PAYMENT_TYPE.CHARGE]: '-',
  };

  private colorTransactionMapping = {
    [TRANSACTION_TYPE.STORAGE]: {
      bg: '#E5F5FF',
      color: '#009DFF',
    },
    [TRANSACTION_TYPE.TRAVEL]: {
      bg: '#E5FBF7',
      color: '#00D6B5',
    },
    [TRANSACTION_TYPE.BILL]: {
      bg: '#FEEDF4',
      color: '#F25195',
    },
  };

  private colorPaymentMapping = {
    [PAYMENT_TYPE.REFUND]: '#01D167',
    [PAYMENT_TYPE.CHARGE]: '#222222',
  };

  protected render() {
    const listIcons: Record<string, JSX.Element> = {
      [TRANSACTION_TYPE.STORAGE]: <FileStorageIcon />,
      [TRANSACTION_TYPE.TRAVEL]: <FlightIcon />,
      [TRANSACTION_TYPE.BILL]: <MegaPhoneIcon />,
    };
    return (
      <div class="transaction-item">
        {
          this.data ?
            <div class="transaction-item__wrapper">
              <div
                class="transaction-item__icon"
                style={`
                  color: ${this.colorTransactionMapping[this.data.transactionType].color};
                  background-color: ${this.colorTransactionMapping[this.data.transactionType].bg};
                `}
              >
                {listIcons[this.data.transactionType]}
              </div>
              <div class="transaction-item__info">
                <div class="transaction-item__info-header">
                  <div class="transaction-item__info--label">{ this.data.label }</div>
                  <div
                    class="transaction-item__balance"
                    style={`color: ${this.colorPaymentMapping[this.data.paymentType]}`}
                  >
                    <div>{ this.amountMapping[this.data.paymentType] } </div>
                    <div>{ this.data.currency } </div>
                    <div>{ this.data.amount } </div>
                    <next-icon class="transaction-item__balance--icon" />
                  </div>
                </div>
                <div class="transaction-item--date">{ this.data.date }</div>
                <div class="transaction-item__actions">
                  <div class="transaction-item__actions--icon">
                    <finance-icon />
                  </div>
                  <div class="transaction-item__actions--label">
                    { this.paymentMapping[this.data.paymentType] } to debit card
                  </div>
                </div>
              </div>
            </div>
            : ''
        }
      </div>
    );
  }
}

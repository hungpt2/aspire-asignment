import LogoIcon from '@/assets/icons/Logo';
import VisaIcon from '@/assets/icons/Visa';
import EyeIcon from '@/assets/icons/Eye';
import { ICard } from '@/shared/models';
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import './index.scss';

@Component({
  name: 'card-box',
  components: {
    'logo': LogoIcon,
    'visa': VisaIcon,
    'eye-icon': EyeIcon,
  },
})
export default class CardBox extends Vue {
  @Prop() private cardData!: ICard;

  private isShowCardNumber = false;

  protected render() {
    return (
      <div ref="cardBox" class="card-box" draggable="false">
        <div class="card-box__show-number" on-click={() => { this.isShowCardNumber = !this.isShowCardNumber; }}>
          {
            this.cardData ?
              <div class="card-box__show-number__wrapper">
              <eye-icon class="card-box__show-number--icon" style={`color: ${this.cardData.cardColor}`} />
                  <span class="card-box__show-number--label" style={`color: ${this.cardData.cardColor}`}>
                    { this.isShowCardNumber ? 'Hide' : 'Show' } card number
                  </span>
              </div>
              : ''
          }
        </div>
        {
          this.cardData ?
          (<div
            draggable="false"
            class="card-box__wrapper"
            style={`background-color: ${this.cardData.cardColor}`}
            on-click={ (e: Event) => { e.preventDefault(); this.onSelectCard(); } }
          >
            <div class="card-box__logo">
              <logo />
            </div>

            <div class="card-box__info">
              <div class="card-box__info--name">
                { this.cardData.customerName }
              </div>

              <div class="card-box__info-group">
                <div class="card-box__info__card-number">
                  { this.cardData.cardNumber.split('').map((char: string, idx: number) => {
                    return (
                    <span
                      class={[
                        'card-box__info__card-number--char',
                        (idx + 1) % 4 === 0 ? 'spacing' : '',
                        this.isShowCardNumber || (idx > this.cardData.cardNumber.length - 5) ? 'show' : 'hide',
                      ]}
                    >
                      {
                        this.isShowCardNumber || (idx > this.cardData.cardNumber.length - 5) ? char : ''
                      }
                    </span>
                    );
                  }) }
                </div>
                <div class="card-box__info__card-time">
                  <div class="card-box__info--card-expired">
                    <span>Thru: </span>
                    <span>{ this.cardData.expired }</span>
                  </div>
                  <div class="card-box__info--cvv">
                    <span>CVV: </span>
                    <span>***</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-box__visa">
              <visa />
            </div>
          </div>)
            : ''
        }
      </div>
    );
  }

  @Emit('selected')
  private onSelectCard(): void {}
}

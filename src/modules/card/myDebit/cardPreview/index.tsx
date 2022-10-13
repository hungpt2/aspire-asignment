import { Vue, Component } from 'vue-property-decorator';
import { ICard } from '@/shared/models';
import CardBox from './cardBox';
import './index.scss';
import { get } from 'lodash';
import { IAppState } from '@/store/models';
import { State } from 'vuex-class';

@Component({
  name: 'card-preview',
  components: {
    'card-box': CardBox,
  },
})
export default class CardPreview extends Vue {

  @State((state: IAppState) => state.common.listCard)
  private readonly listCard!: ICard[];

  private cardSelectedIndex = 0;
  private mousePosition = -1;
  private listHeight = 0;

  protected async mounted() {
    await this.$store.dispatch('getListCard');
    window.addEventListener('resize', this.getListHeight);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    this.getListHeight();
  }

  protected destroyed() {
    window.removeEventListener('resize', this.getListHeight);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  protected render() {
    return (
      <div class="card-preview">
        <div
          class="card-preview__list"
          style={`height: ${this.listHeight}px`}
          key={this.listCard.length}
        >
          {
            this.listCard.map((card, idx) => {
              return (
                <card-box
                  ref={`card-${idx}`}
                  cardData={card}
                  style={`
                    transform: translateX(calc(${100 * (this.cardSelectedIndex === idx ? 0 : idx - this.cardSelectedIndex)}% + ${16 * (this.cardSelectedIndex === idx ? 0 : idx - this.cardSelectedIndex)}px));
                  `}
                  class={[
                    'card-preview__list--item',
                    this.cardSelectedIndex === idx ? 'active' : '',
                    idx - this.cardSelectedIndex > 0 ? 'right' : 'left',
                  ]}
                  on-selected={ () => { this.onSelectCard(card, idx); } }
                />
              );
            })
          }
        </div>
        <div class="card-preview__actions">
          {
            this.listCard.map((card, idx) => {
              return (
                <div
                  class={[
                    this.cardSelectedIndex === idx ? 'active' : '',
                    'card-preview__actions--item',
                  ]}
                  on-click={ () => { this.onSelectCard(card, idx); } }
                />
              );
            })
          }
        </div>
      </div>
    );
  }

  private onSelectCard(card: ICard, idx: number): void {
    if (this.mousePosition > 0) {
      this.cardSelectedIndex = idx;
    }
  }

  private getListHeight(): void {
    this.listHeight = get(this.$refs[`card-${this.cardSelectedIndex}`], '$refs.cardBox.clientHeight', 0) + 30;
  }

  private onMouseDown(event: MouseEvent) {
    this.mousePosition = event.screenX;
  }
  private onMouseUp(event: MouseEvent) {
    if (window.innerWidth > 992) {
      return;
    }
    let active = -1;
    if (this.mousePosition - event.screenX === 0) {
      return false;
    } else if (this.mousePosition - event.screenX > 0) {
      active = this.cardSelectedIndex < this.listCard.length - 1 ? this.cardSelectedIndex + 1 : -1;
    } else {
      active = this.cardSelectedIndex > 0 ? this.cardSelectedIndex - 1 : -1;
    }
    if (active > -1) {
      this.$nextTick(() => {
        this.onSelectCard(this.listCard[active], active);
        this.mousePosition = -1;
      });
    }
  }
}

import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
import { get } from 'lodash';
import './Collapse.scss';

@Component({
  name: 'collapse-container',
})
export default class CollapseContainer extends Vue {
  @Prop() private initValue!: boolean;

  private isShow = false;
  private collapseHeight = -1;

  public onToggle(): void {
    this.isShow = !this.isShow;
    this.onChanged(this.isShow);
    this.$nextTick(() => {
      this.collapseHeight = get(this.$refs.head, 'clientHeight') + (this.isShow ? get(this.$refs.expand, 'clientHeight') : 0);
    });
  }

  protected mounted() {
    this.$nextTick(() => {
      this.collapseHeight = get(this.$refs.head, 'clientHeight');
      if (this.initValue) {
        this.onToggle();
      }
    });
  }

  protected render() {
    return (
      <div style={this.collapseHeight !== -1 ? `height: ${this.collapseHeight}px` : ''} class="collapse">
        <div ref="head" class="collapse-head" on-click={() => { this.onToggle(); }}>
          {this.$slots.default}
        </div>
        <div ref="expand" class={['collapse-expand', this.isShow ? 'show' : '']}>
          {this.$slots.expand}
        </div>
      </div>
    );
  }

  @Emit('changed')
  private onChanged(value: boolean): boolean {
    return value;
  }
}

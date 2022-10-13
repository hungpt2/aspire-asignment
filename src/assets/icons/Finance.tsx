import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'FinanceIcon',
})
export default class FinanceIcon extends Vue {
  protected render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="7.862"
        viewBox="0 0 10 7.862"
      >
        <defs />
        <g transform="translate(0 -84.598)">
          <path
            fill="currentColor"
            d="M0,212.943v3.039a1.481,1.481,0,0,0,1.349,1.584h7.3A1.481,1.481,0,0,0,10,215.981v-3.039a.258.258,0,0,0-.235-.276H.235A.258.258,0,0,0,0,212.943Zm2.5,1.929H1.871a.488.488,0,0,1,0-.964H2.5a.488.488,0,0,1,0,.964Z"
            transform="translate(0 -125.106)"
          />
          <path
            fill="currentColor"
            d="M10,87.018v-.1a1.481,1.481,0,0,0-1.349-1.584h-7.3A1.481,1.481,0,0,0,0,86.918v.1a.258.258,0,0,0,.235.276H9.765A.258.258,0,0,0,10,87.018Z"
            transform="translate(0 -0.736)"
          />
        </g>
      </svg>
    );
  }
}

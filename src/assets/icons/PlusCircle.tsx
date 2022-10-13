import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'PlusCircleIcon',
})
export default class PlusCircleIcon extends Vue {
  protected render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <defs />
        <g transform="translate(-27.3 -0.445)">
          <rect
            fill="transparent"
            width="16"
            height="16"
            transform="translate(27.3 0.445)"
          />
          <path
            fill="currentColor"
            stroke-width="0"
            d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.508,7.508,0,0,0,7.5,0Zm3.281,8.125H8.125v2.656a.625.625,0,1,1-1.25,0V8.125H4.219a.625.625,0,1,1,0-1.25H6.875V4.219a.625.625,0,1,1,1.25,0V6.875h2.656a.625.625,0,1,1,0,1.25Zm0,0"
            transform="translate(27.8 0.945)"
          />
        </g>
      </svg>
    );
  }
}

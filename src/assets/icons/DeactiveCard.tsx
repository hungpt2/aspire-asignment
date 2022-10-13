import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'DeActiveCardIcon',
})
export default class DeActiveCardIcon extends Vue {
  protected render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <defs />
        <g transform="translate(213 -305)">
          <g transform="translate(-236.222 315)">
            <path
              fill="#9ac0fa"
              d="M64.444,138.522a1.925,1.925,0,0,0,1.919,1.927h7.675a1.925,1.925,0,0,0,1.919-1.927v-9.633H64.444Z"
              transform="translate(-31.259 -126.449)"
            />
            <path
              fill="#f1f3f4"
              d="M40.861-.037V-1h-3.84v.963h-4.8V2.212H45.661V-.037Z"
              transform="translate(0 -1)"
            />
          </g>
        </g>
      </svg>
    );
  }
}

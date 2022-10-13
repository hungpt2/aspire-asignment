import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'payment-module',
})
export default class Payment extends Vue {

  protected render() {
    return (
      <div>payment</div>
    );
  }
}

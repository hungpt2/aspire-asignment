import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'credit-module',
})
export default class Credit extends Vue {

  protected render() {
    return (
      <div>credit</div>
    );
  }
}

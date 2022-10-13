import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'home-module',
})
export default class Home extends Vue {

  protected render() {
    return (
      <div>home</div>
    );
  }
}

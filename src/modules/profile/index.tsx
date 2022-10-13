import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'about-module',
})
export default class About extends Vue {

  protected render() {
    return (
      <div>about me</div>
    );
  }
}

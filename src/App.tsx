import { Vue, Component } from 'vue-property-decorator';
import './App.scss';

@Component({
  name: 'app',
  components: {
  },
})
export default class App extends Vue {
  protected render() {
    return (
      <div>
        <div>sidebar</div>
        <router-view/>
      </div>
    );
  }
}

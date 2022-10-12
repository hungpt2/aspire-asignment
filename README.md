## Node version
16.9.0

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Auto sort localization files
```
yarn sort
```
- This command with sort `en.json` & `cn.json` file.
- The JSON specification does not allow a trailing comma, so please check JSON file after merge code.

### Vue with Typescript
To know how to implement TypeScript with Vue, see [VueTypescript](https://vuejs.org/v2/guide/render-function.html)

### UI Component
We are currently using Ant Design for our component. See [Doc](https://vue.ant.design) for more information.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Custom Component Document:

#### Abstract Form:
- Example: [PerformTTForm.tsx](https://github.com/octox-io/Zebra-Clients/blob/d231cb2a0599ea0b6693f1578cec7bf2d66f4993/Bo/Src/src/modules/operations/components/performTTDialog/PerformTTForm.tsx)
- Always extends `AbstractForm<TRequest, TResponse = any>` if it's possible.
- After that, you will have to implement three method: `request`, `requestSuccess` and `requestFail` in your component.
- Put `this.onSubmitForm` in your form submit event and submit button click event.
```html
<a-form on-submit={this.onSubmitForm}> 
<!-- code -->
  <a-button
    htmlType="submit"
    type="primary"
    on-click={this.onSubmitForm}
  >
<!-- code -->
</a-form>
```

- The flow: 
  - Put your request or dispatch action in `request` method. You don't have to put a try catch block here or check validate your form. `AbstractForm` will do that for you.
  - If the `request` passed you would receive the response in `requestSuccess` as a parameter.
  - Or if the `request` or `requestSuccess` failed it would go to `requestFail`.
- See [CommonForm.ts](https://github.com/octox-io/Zebra-Clients/blob/d231cb2a0599ea0b6693f1578cec7bf2d66f4993/Bo/Src/src/shared/mixins/CommonForm.ts) for more information.

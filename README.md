# 🦊 react-native-vulpes

Vulpes design system React Native implementation.

## Installation

```sh
yarn add react-native-vulpes react-native-linear-gradient
```

## Usage

* Import the Vulpes Provider component
* Apply in your root component with the default theme 'gogood'

```js
import { VulpesProvider } from 'react-native-vulpes';

const App = () => {
  return (
    <VulpesProvider theme={'gogood'}>
      <Content/>
    </VulpesProvider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```
* Now you can use all Vulpes components in your app

```js
// Content.js
import {H1} from "react-native-vulpes";

// ...

<H1 color="light_success">
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

This project is under [MIT](LICENSE) license.

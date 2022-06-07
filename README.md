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
import {H1, H2} from "react-native-vulpes";

// ...

<H1 color={'gray.80'}>Hello</H1>
<H2 color={'singleton.black'}>Vulpes</H2>

```

### Colors
The colors provided by vulpes are accessible through color tokens in the format 'famiy.grade'

|           |   |    |    |    |    |     |     |     |     |       |       |             |      |      |       |      |        |
|-----------|---|----|----|----|----|-----|-----|-----|-----|-------|-------|-------------|------|------|-------|------|--------|
| singleton | - | -  | -  | -  | -  | -   | -   | -   | -   | white | black | transparent | -    | -    | -     | -    | -      |
| primary   | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| secondary | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| comp1     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| comp2     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| comp3     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| comp4     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| success   | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| error     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| alert     | - | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| gray      | 3 | 20 | 40 | 60 | 80 | 100 | 110 | 100 | 110 | -     | -     | -           | -    | -    | -     | -    | -      |
| gradient  | - | -  | -  | -  | -  | -   | -   | -   | -   | -     | -     | -           | cyan | blue | green | pink | purple |
|           |   |    |    |    |    |     |     |     |     |       |       |             |      |      |       |      |        |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

This project is under [MIT](LICENSE) license.

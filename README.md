# Spectrum White Theme

This theme is intended for [Adobe Spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html), it leverages [Adobe's React Spectrum Lightest Theme](https://github.com/adobe/spectrum-css/blob/main/components/vars/css/themes/spectrum-lightest.css) guidelines to provide an accesibile color palette with white as the baseline.

## Getting started

The easiest way to start building a React Spectrum application is by following Adobe's [getting started guide](https://react-spectrum.adobe.com/react-spectrum/getting-started.html). It walks through all of the steps needed to install the components from npm, set up build tooling, and create your first application.

### Example

Here is an example of how to implement this theme.

```javascript
import { Provider } from '@adobe/react-spectrum';
import WhiteTheme from 'spectrum-white-theme';

function App() {
  return <Provider theme={WhiteTheme}>Hello React Spectrum!</Provider>;
}
```

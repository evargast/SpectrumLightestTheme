import { Theme } from '@react-types/provider';

import global from '@spectrum-css/vars/dist/spectrum-global.css';
import lightest from '@spectrum-css/vars/dist/spectrum-lightest.css';
import large from '@spectrum-css/vars/dist/spectrum-large.css';
import medium from '@spectrum-css/vars/dist/spectrum-medium.css';

import '@spectrum-css/vars/css/globals/index.css';
import '@spectrum-css/vars/css/themes/spectrum-lightest.css';
import '@spectrum-css/vars/css/scales/spectrum-large.css';
import '@spectrum-css/vars/css/scales/spectrum-medium.css';

const WhiteTheme: Theme = {
  global,
  light:lightest,
  medium,
  large,
};

export default WhiteTheme;


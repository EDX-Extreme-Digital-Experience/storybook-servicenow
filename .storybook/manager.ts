import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';


addons.setConfig({
    theme: create({
        base: "dark",
        fontBase: '"Lato", sans-serif',
        brandTitle: `<div style="display: flex; gap: 1rem; align-items: center"><img src="/oikos-logo.png" width="130px" height="50px"/></div>`,
        brandUrl: 'https://goedx.com.br/',
        brandTarget: '_self',
    }),
  });
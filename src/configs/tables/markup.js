import {MainConfig, TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'markup',
  attributes: {
    iBreakQty: {
      ...TextInputTypeConfig, label: 'Qty',
      exclude: ['grid', 'add', 'edit']
    },
    dMarkup: {
      ...TextInputTypeConfig,
      label: 'Markup',
      currency: '%',
      position: 'right',
      exclude: ['grid', 'add', 'edit'],
    },
  }
}
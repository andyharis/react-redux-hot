import {MainConfig, TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'quoteCategory',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: 'Quote Category'
    },
  }
}
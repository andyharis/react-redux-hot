import {MainConfig, TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'quoteCategory',
  attributes: {
    iID: {
      ...TextInputTypeConfig,
      exclude:['add','edit','grid']
    },
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: 'Quote Category'
    },
  }
}
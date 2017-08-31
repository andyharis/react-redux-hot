import {MainConfig,TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'itemCategory',
  attributes: {
    iID: {
      ...TextInputTypeConfig,
      exclude:['add','edit','grid']
    },
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: "Category",
    },
    sDesc: {
      ...TextInputTypeConfig,
      attribute: 'sDesc',
      label: 'Description'
    }
  }
}
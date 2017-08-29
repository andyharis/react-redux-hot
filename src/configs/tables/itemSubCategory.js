import {MainConfig,TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'itemSubCategory',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: "Sub-Category",
    },
    sDesc: {
      ...TextInputTypeConfig,
      attribute: 'sDesc',
      label: 'Description'
    }
  }
}
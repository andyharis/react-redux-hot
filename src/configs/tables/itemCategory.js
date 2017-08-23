import {TextInputTypeConfig} from 'components/types';

export default {
  table: 'itemCategory',
  attributes: {
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
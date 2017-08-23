import {TextInputTypeConfig} from 'components/types';

export default {
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
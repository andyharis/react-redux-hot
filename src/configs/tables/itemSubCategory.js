import {MainConfig, TextInputTypeConfig} from 'components/types';
import markup from './markup';
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
    },
    dMarkup: {
      ...TextInputTypeConfig,
      attribute: 'dMarkup'
    },
    markup: {
      attributes: markup.attributes
    }
  }
}
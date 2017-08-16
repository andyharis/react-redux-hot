import {TextInputTypeConfig} from 'components/types';

export default {
  table: 'clients',
  attributes: {
    sCompanyName:{
      ...TextInputTypeConfig,
      label:"Name Company",
      attribute: "sCompanyName",

    }
  }
}
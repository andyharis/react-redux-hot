import {TextInputTypeConfig} from 'components/types';

export default {
  table: 'clients',
  attributes: [
    {
      attribute: 'sCompanyName',
      ...TextInputTypeConfig
    }
  ]
}
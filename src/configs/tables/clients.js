import {MainConfig, TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'clients',
  attributes: {
    sCompanyName: {
      attribute: 'sCompanyName',
      label: 'Client',
      ...TextInputTypeConfig
    },
    clientsSites: {
      attributes: {
        sSite: {attribute: 'sSite', ...TextInputTypeConfig}
      }
    }
  }
}
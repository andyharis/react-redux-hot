import {MainConfig, TextInputTypeConfig} from 'components/types';

export default {
  ...MainConfig,
  table: 'jobs',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: 'Job'
    },
  }
}
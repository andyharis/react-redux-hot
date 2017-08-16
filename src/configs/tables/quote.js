import {MainConfig, TextInputTypeConfig} from 'components/types';
import quoteCategory from './quoteCategory';
import job from './job';

export default {
  ...MainConfig,
  table: 'quote',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: 'Quote'
    },
    opportunity: {
      attributes: {
        sNo: {
          ...TextInputTypeConfig,
          attribute: 'sNo',
          label: "Opportunity"
        }
      }
    }
  },
  details: [
    quoteCategory.toDetails(),
    job.toDetails()
  ]
}
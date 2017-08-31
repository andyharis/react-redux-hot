import {MainConfig, TextInputTypeConfig} from 'components/types';
import quoteCategory from './quoteCategory';
import job from './job';

export default {
  ...MainConfig,
  table: 'quote',
  attributes: {
    iID: {
      ...TextInputTypeConfig,
      exclude:['add','edit','grid']
    },
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
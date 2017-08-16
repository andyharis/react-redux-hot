import {TextInputTypeConfig} from 'components/types';

export default {
  table: 'product',
  attributes: {
    bStockItem: {
      attribute: 'bStockItem',
      label: "Is in stock?",
      ...TextInputTypeConfig
    }
  }
}
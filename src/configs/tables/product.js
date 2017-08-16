import {TextInputTypeConfig, CheckboxTypeConfig} from 'components/types';
import clients from './clients';
const {attributes: {sCompanyName}} = clients;
export default {
  table: 'product',
  attributes: {
    bStockItem: {
      ...CheckboxTypeConfig,
      label: 'Stock item',
      agGrid: {
        width: 50
      },
      attribute: "bStockItem",
    },
    bPrice: {
      ...TextInputTypeConfig,
      label: 'Price item',
      attribute: "bPrice",
    },
    clients: {
      attributes: {
        sCompanyName
      }
    }
  }

}
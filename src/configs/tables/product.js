import {MainConfig,TextInputTypeConfig, CheckboxTypeConfig,RelationTypeConfig} from 'components/types';
export default {
  ...MainConfig,
  table: 'product',
  attributes: {
    bStockItem: {...CheckboxTypeConfig, label: 'Stock Item', row: 4, col: 1, agGrid: {hide: true}},
  }

}
import {MainConfig, TextInputTypeConfig, RelationTypeConfig} from 'components/types';
import product from './product';
import itemCategory from './itemCategory';
import itemSubCategory from './itemSubCategory';

const {attributes: {bStockItem}} = product;
const {attributes: {sName}} = itemCategory;
const {attributes: {sName: subCategory}} = itemSubCategory;
export default {
  ...MainConfig,
  table: 'itemProduct',
  attributes: {
    sName: {
      ...TextInputTypeConfig,
      attribute: 'sName',
      label: 'Product'
    },
    iItemCategoryID: {
      ...RelationTypeConfig,
      searchField: 'sName',
      pk: 'iID',
      searchTable: itemCategory.table
    },
    iItemSubCategoryID:{
      ...RelationTypeConfig,
      searchField: 'sName',
      pk: 'iID',
      searchTable: itemSubCategory.table
    },
    itemCategory: {
      attributes: {
        sName
      }
    },
    itemSubCategory: {
      attributes: {
        sName: subCategory
      }
    },
    product: {
      attributes: {
        bStockItem
      }
    }
  }
}
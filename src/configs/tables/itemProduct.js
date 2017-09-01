import {MainConfig, TextInputTypeConfig, RelationTypeConfig} from 'components/types';
// import product from './product';
import itemCategory from './itemCategory';
import itemSubCategory from './itemSubCategory';

// const {attributes: {bStockItem}} = product;
const {attributes: {sName}} = itemCategory;
const {attributes: {sName: subCategory, markup}} = itemSubCategory;
export default {
  ...MainConfig,
  table: 'itemProduct',
  attributes: {
    iID: {
      ...TextInputTypeConfig,
      exclude: ['add', 'edit', 'grid']
    },
    sCode: {...TextInputTypeConfig, label: 'Code *', attribute: 'sCode'},
    sName: {...TextInputTypeConfig, label: 'Name *', attribute: 'sName', link: true},
    sDesc: {...TextInputTypeConfig, label: 'Description', attribute: 'sDesc', popup: true},
    iItemCategoryID: {
      ...RelationTypeConfig,
      searchField: 'sName',
      pk: 'iID',
      searchTable: itemCategory.table,
      exclude: ['grid']
    },
    iItemSubCategoryID: {
      ...RelationTypeConfig,
      searchField: 'sName',
      pk: 'iID',
      searchTable: itemSubCategory.table,
      exclude: ['grid']
    },
    itemCategory: {
      attributes: {
        sName: {
          ...sName,
          exclude: ['add', 'edit']
        }
      }
    },
    itemSubCategory: {
      attributes: {
        sName: {
          ...subCategory,
          exclude: ['add', 'edit']
        },
        markup
      }
    },
    // product: {
    //   attributes: {
    //     bStockItem
    //   }
    // }
  }
}
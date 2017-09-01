import {MainConfig,TextInputTypeConfig, CheckboxTypeConfig,RelationTypeConfig} from 'components/types';
export default {
  ...MainConfig,
  table: 'product',
  attributes: {
    iSupplierID: {
      ...RelationTypeConfig,
      label: 'Preferred supplier',
      searchTable: 'supplier',
      searchField: 'sName',
      // attributeValue: 'iID',
      // agGrid: {hide: true},
      exclude: ['add', 'edit'],
      // row: 3, col: 6
    },
    iWarranty: {
      ...DropdownConfig,
      label: 'Warranty',
      row: 3,
      col: 6,
      order:5,
      index: 'Warranty Period'
    },
    iSupplierID: {
      ...CustomConfig,
      label: 'Preffered supplier',
      exclude: ['grid'],
      calculate: {
        path: '$.supplierProducts[*].supplier',
        raw: true,
        callback: function (found, rowData, fullData, viewMode) {
          try {
            const data = [];
            const preffered = dotProps.get(fullData, 'product.iSupplierID');
            let selected = '';
            if (!found) {
              found = [];
              let obj = dotProps.get(fullData, 'supplierProducts');
              Object.keys(obj).map((row) => {
                found.push(obj[row].supplier);
              });
            }
            found.map((row, k) => {
              if (row.iID == preffered) {
                selected = row.sContactName;
              }
              data.push({
                key: k,
                value: row.iID,
                text: row.sContactName
              });
            });
            if (viewMode)
              return selected;
            else {
              return (props) => <Dropdown fluid selectOnBlur={false} selection options={data} {...props}/>;
            }
          } catch (e) {
            return '';
          }
        }
      },
      row: 3, col: 6
    },
    bStockItem: {...CheckboxConfig, label: 'Stock Item', row: 4, col: 1, agGrid: {hide: true}},
    iReorderQty: {
      ...TextConfig, label: 'Reorder Qty', row: 4, agGrid: {hide: true}, col: 1, dependent: {
        path: 'product.bStockItem',
        callback: function (value) {
          return value == '1' ? false : <span></span>;
        }
      }
    },
    iTargetQty: {
      ...TextConfig, label: 'Target Qty', agGrid: {hide: true}, row: 4, col: 1, dependent: {
        path: 'product.bStockItem',
        callback: function (value) {
          return value == '1' ? false : <span></span>;
        }
      }
    },
    bInstallTracking: {
      ...CheckboxConfig,
      label: 'Install Tracking', row: 5, col: 1, agGrid: {hide: true}
    },
    bSerialNoTracking: {
      ...CheckboxConfig,
      label: 'Serial No Tracking', row: 5, col: 1, agGrid: {hide: true}
    },
    supplier: {
      additional: true,
      attributes: {
        sName: {...TextConfig, label: 'sName', exclude: ['grid', 'add', 'edit']},
      }
    }
  }

}
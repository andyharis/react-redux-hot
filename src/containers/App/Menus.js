import {SEARCH, DETAILS, EDIT} from 'components/access';
export default {
  top: [
    {label: 'Opportunity', table: 'opportunity', icon: 'clone', access: SEARCH},
    {label: 'Quote', table: 'quote', icon: 'table', access: SEARCH},
    {label: 'Job', table: 'job', icon: 'briefcase', access: SEARCH, query: '?new=true'},
    {label: 'Purchase Order', table: 'purchaseOrder', icon: 'shop', access: SEARCH},
  ],
  bottom: [
    {label: 'Clients', table: 'clients', icon: 'users', access: SEARCH},
    {label: 'Contact Persons', table: 'contactPersons', icon: 'users', access: SEARCH},
    {label: 'Products', table: 'itemProduct', icon: 'archive', access: SEARCH},
    {label: 'Labours', table: 'itemLabour', icon: 'configure', access: SEARCH},
    {label: 'Suppliers', table: 'supplier', icon: 'add', access: SEARCH},
    {label: 'Quote Template', table: 'quoteTemplateUpgrade', icon: 'tasks', access: SEARCH},
    // {label: 'Install', table: 'install', icon: 'location arrow', access: SEARCH},
    {label: 'Delivery', table: 'delivery', icon: 'add', access: SEARCH},
    {label: 'Stock Products', table: 'stockCheck', icon: 'add', access: SEARCH},
    {label: 'Job ProForma', table: 'jobVisit', icon: 'add', access: SEARCH},
  ],
  settings: [
    {label: 'Users', table: 'members', icon: 'add', access: SEARCH},
    {label: 'Roles', table: 'role', icon: 'add', access: SEARCH},
    {label: 'Rights', table: 'rights', icon: 'add', access: SEARCH},
    {label: 'Email Templates', table: 'emailTemplates', icon: 'add', access: SEARCH},
    {label: 'Employee', table: 'employee', icon: 'detective', access: SEARCH},
    {label: 'Categories', table: 'itemCategory', icon: 'list layout', access: SEARCH},
    {label: 'Sub-Categories', table: 'itemSubCategory', icon: 'list layout', access: SEARCH},
    {label: 'QT Category', table: 'quoteTemplate', icon: 'tasks', access: SEARCH},
    {label: 'QT Sub-Category', table: 'quoteTemplateCategory', icon: 'tasks', access: SEARCH},
  ],
};

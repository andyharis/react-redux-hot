import Obj from './Obj';


const colors = [
  'blue',
  'green',
  'red',
  'yellow',
  'magenta',
  'cyan'
];

const config = {
  // title: 'Log group title',
  isOpen: false,
  // messages: [],
  table: {}
};

/**
 * Outputs formatted messages
 *
 * @param object title:string, messages:[], isOpen:bool
 * @constructor
 */
export default function Log(object) {
  object = {...config, ...object};
  if (object.title)
    object.isOpen ? console.group(object.title) : console.groupCollapsed(object.title);
  if (object.messages)
    object.messages.map((row, key) => {
      console.info(`%c${key}`, `color:${colors[key]}`, row);
      // let message = row[0];
      // console.info(`%c${message} `, `color:${colors[key]}`, ...Obj.delete(row, 0));
    });
  if (object.table)
    console.table(object.table);
  if (object.title)
    console.groupEnd();
}
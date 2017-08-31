import React from 'react';
import {EDIT, ADD} from 'components/access';
import {Link} from 'react-router-dom';
import {Icon,Input, Menu, Button, Dropdown} from 'semantic-ui-react';
import Menus from './Menus';
const identity = {sTitle:'m'};
export default function (props) {
  return <Menu attached='top' className="padding-left-0 padding-right-0 main-menu" inverted>
    {Menus.top.map((menu, key) => {
      const table = menu.model || menu.table;
      if (props.userCan(table, false, menu.access))
        return <Menu.Item name={menu.label} key={`menu${key}`}>
          <Link key={`top-${key}`} to={`/table/${table}`}>
            <Icon name={menu.icon} size='small'/>
            {menu.label}
          </Link>
          {props.userCan(table, false, ADD) &&
          <Link to={`/edit/${table}${menu.query || ''}`}>
            <Button circular icon='plus' basic size="mini"/>
          </Link>
          }
        </Menu.Item>
    })}
    <Dropdown item icon='content' simple className="menu-dropdown-ui">
      <Dropdown.Menu>
        {Menus.bottom.map((menu, key) => {
          const table = menu.model || menu.table;
          if (props.userCan(table, false, menu.access))
            return <Dropdown.Item name={menu.label} key={`top-${key}`}>
              <Link key={`top-${key}`} to={`/table/${table}`}>
                <Icon name={menu.icon} size='small'/>
                {menu.label}
              </Link>
              {props.userCan(table, false, ADD) &&
              <Link to={`/edit/${table}`}>
                <Button circular icon='plus' basic size="mini"/>
              </Link>
              }
            </Dropdown.Item>
        })}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input size='small'
               icon={<Icon name='search' link/>}
               placeholder='Search...'
        />
      </Menu.Item>
      <Dropdown item text={`${identity.sTitle}. ${identity.sFirstname} ${identity.sLastname}`} simple
                className="menu-dropdown-ui">
        <Dropdown.Menu>
          <Dropdown.Item name="Logout">
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown item icon='settings' simple className="menu-dropdown-ui">
        <Dropdown.Menu>
          {Menus.settings.map((menu, key) => {
            const table = menu.model || menu.table;
            if (props.userCan(table, false, menu.access))
              return <Dropdown.Item name={menu.label} key={`top-${key}`}>
                <Link key={`top-${key}`} to={`/table/${table}`}>
                  <Icon name={menu.icon} size='small'/>
                  {menu.label}
                </Link>
                {props.userCan(table, false, ADD) &&
                <Link to={`/edit/${table}`}>
                  <Button circular icon='plus' basic size="mini"/>
                </Link>
                }
              </Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
}
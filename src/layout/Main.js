import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Dropdown, Icon, Menu, Message, Grid, Segment, Input, Button} from 'semantic-ui-react';
import {asyncConnect} from 'redux-async-connect';
import {Router, Link} from 'react-router';
import {prepare} from 'components/request';
import {addTableIndex, requestById, save, deleteTables} from 'redux/modules/tables'
import {open, create, deleteTab, gridLoading} from 'redux/modules/tabs';
import {deleteMessage, addMessage, delAllMessage} from 'redux/modules/messages';
import {createDetails, openDetails} from 'redux/modules/details'
import {addConfig} from 'redux/modules/configs'
import {loadAuth, userCan, logout} from 'redux/modules/auth';
import {requestData} from 'redux/modules/staticStore';
import Menus from './Menus';
import {EDIT, ADD} from 'components/access';
@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    const {auth, staticStore} = getState();
    if (auth.isGuest) {
      promises.push(dispatch(loadAuth()))
    } else if (!staticStore.loaded) {
      promises.push(dispatch(requestData()));
    }
    return Promise.all(promises);
  }
}])
@connect((state, {dispatch}) => {
  return {
    dispatch,
    loaded: state.reduxAsyncConnect.loaded,
    auth: state.auth,
    messages: state.messages,
    configs: state.configs
  }
}, {pushState: push, userCan})
export default class App extends Component {
  state = {
    currentTabId: false,
  }
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(next) {
    const {auth} = next;
    const currentAuth = this.props.auth;
    if (currentAuth.isGuest && !auth.isGuest) {
      this.props.pushState('/dashboard');
    } else if (!currentAuth.isGuest && auth.isGuest) {
      console.log('idi nahui');
      this.props.pushState('/login');
    }
  }

  componentDidMount() {
    socket.on('authLost', (d) => {
      this.props.dispatch(logout());
    });
  }

  handleDismiss = (key) => {
    this.props.dispatch(deleteMessage(key));
  }


  deleteAllMessages = () => {
    this.props.dispatch(delAllMessage());
  }
  logOut = () => {
    console.log('logOut');
    this.props.dispatch(logout());
  }


  render() {
    const {auth:{isGuest, identity}, loaded} = this.props;
    const {messages} = this.props.messages;
    return <Grid stackable className="main-grid">
      <div className="message-block">
        {messages && messages.map((val, key) => {
          return <Message key={key} className={`mess ${val.type}`} onDismiss={() => this.handleDismiss(key)}
                          header={val.header}
                          content={val.value}>
          </Message>
        })
        }
        {messages.length > 3 &&
        <button onClick={() => this.deleteAllMessages()}>Hide all</button>
        }
      </div>
      {!isGuest && loaded &&
      <Menu attached='top' className="padding-left-0 padding-right-0 main-menu" inverted>
        {Menus.top.map((menu, key) => {
          const table = menu.model || menu.table;
          if (this.props.userCan(table, false, menu.access))
            return <Menu.Item name={menu.label} key={`menu${key}`}>
              <Link key={`top-${key}`} to={`/table/${table}`}>
                <Icon name={menu.icon} size='small'/>
                {menu.label}
              </Link>
              {this.props.userCan(table, false, ADD) &&
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
              if (this.props.userCan(table, false, menu.access))
                return <Dropdown.Item name={menu.label} key={`top-${key}`}>
                  <Link key={`top-${key}`} to={`/table/${table}`}>
                    <Icon name={menu.icon} size='small'/>
                    {menu.label}
                  </Link>
                  {this.props.userCan(table, false, ADD) &&
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
              <Dropdown.Item name="Logout" onClick={() => {
                this.logOut()
              }}>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item icon='settings' simple className="menu-dropdown-ui">
            <Dropdown.Menu>
              {Menus.settings.map((menu, key) => {
                const table = menu.model || menu.table;
                if (this.props.userCan(table, false, menu.access))
                  return <Dropdown.Item name={menu.label} key={`top-${key}`}>
                    <Link key={`top-${key}`} to={`/table/${table}`}>
                      <Icon name={menu.icon} size='small'/>
                      {menu.label}
                    </Link>
                    {this.props.userCan(table, false, ADD) &&
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
      <div className="main-border">
        <Segment attached='bottom' className="grid-overflow" loading={!loaded}>
          {this.props.children}
        </Segment>
      </div>
    </Grid>
  }
}

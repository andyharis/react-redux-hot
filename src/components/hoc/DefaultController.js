import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Request from "components/request/Request";
import * as configs from 'configs/tables';


export default function DefaultController() {
  return class DefaultController extends Component {
    componentDidMount() {
      this.fetchData(this.props);
    }

    fetchData = (props) => {
      const {table} = props;
      this.props.fetchData(table, prepareDataForFetch(table, params, id));
    }
  }
}
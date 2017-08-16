import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';

const Loader = (props) => {
  const {loading, delay, hint, showWhileLoading} = props;
  return <div className="loader">
    <div className={`loader-wrapper ${loading ? 'active' : ''}`}></div>
    <Spin spinning={loading}
          delay={delay || 100}
          tip={hint || "Loading data..."}
          className="loader-spinner"
    />
    {showWhileLoading && props.children}
    {(!showWhileLoading && !loading) && props.children}
  </div>
}
Loader.defaultProps = {
  showWhileLoading: true
}
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  delay: PropTypes.number,
  hint: PropTypes.string,
  showWhileLoading: PropTypes.bool
}
export default Loader;
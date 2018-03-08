import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../components/app';
import * as Actions from '../actions';

function mapStateToProps({reducer}){
  const {counter} = reducer;
  return {dunny: counter};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Nfl from '../components/nfl';
import Actions from '../actions';

function mapStateToProps({nfl}){
  return {nfl};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nfl);
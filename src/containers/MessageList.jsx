import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import fetchMessages from '../actions';

import Message from '../components/message';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages('general').then(() => {
      console.log(this.props.fetchedInfos);
    });
  }

  render() {
    return (
      <div>
        {this.props.fetchedInfos.map((mess) => {
          return <Message key={mess.id} message={mess} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchedInfos: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

'use strict';
const React = require('react');

class Title extends React.Component {
  render() {
    console.log(this.props.status)
    return (
      <h1 text='Hello Wordl'/>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      status: 'init'
    }
 
  }

  render() {
    return (
      <Title status={this.state.status} />
    )
  }
}

module.exports = Index

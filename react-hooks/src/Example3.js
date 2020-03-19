import React, { Component } from 'react'
class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount () {
    console.log(`compontnentDidMount => You clicked ${this.state.count} times`)
  }

  componentDidUpdate () {
    console.log(`compontnentDidUpdate => You clicked ${this.state.count} times`)
  }

  render() {
    return (
      <div>
        <p>You clicked { this.state.count } times.</p>
        <button onClick={ this.addCount.bind(this)}>Cilck Me</button>
      </div>
    );
  }
}

export default Example3;
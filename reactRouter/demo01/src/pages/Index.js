import React,{ Component } from 'react'
// import { Redirect } from 'react-router-dom'

class Index extends Component{
  constructor(props) {
    super(props)
    this.state = {}
    this.props.history.push('/home')
  }
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <React.Fragment>
        <h2>This is the Index page.</h2>
        {/* <Redirect to="/home/" /> */}
      </React.Fragment>
    )
  }
}

export default Index
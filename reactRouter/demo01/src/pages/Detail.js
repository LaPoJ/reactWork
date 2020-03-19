import React,{ Component } from 'react'

class Detail extends Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
    let tempId = this.props.match.params.id
    this.setState({
      id: tempId
    })
  }

  render () {
    return (
      <React.Fragment>
        <h2>This is detail Page.</h2>
        <p>The number is {this.state.id }.</p>
      </React.Fragment>
    )
  }
}

export default Detail
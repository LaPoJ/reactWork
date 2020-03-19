import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

class List extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { cid: 1, title: '测试文章'},
        { cid: 2, title: '测试文章'},
        { cid: 3, title: '测试文章'}
      ]
    }
  }

  render () {
    return (
      <React.Fragment>
        <h2>This is the List Page.</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/detail/`+item.cid}>{ item.title }</Link>
                </li>
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default List
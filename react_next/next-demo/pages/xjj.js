import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Xjj = ({router, list}) => {
  return (
    <>
      <div>{router.query.name }</div>
      <div>{ list }</div>
      <Link href="/"><a>返回首页</a></Link>
    </>
  )
}

Xjj.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
      .then(
        (res) => {
          console.log(res)
          resolve(res.data.data)
        }
      )
  })
  return await promise
}

export default withRouter(Xjj)
import React from 'react'
import Link from 'next/link'

const Home = () => (
  <>
    <div>首页</div>
    <div><Link href='/xjj?name=苍山'><a>去水水页面</a></Link></div>
    <div><Link href='/lp?name=有井'><a>去lapo页面</a></Link></div>
  </>
)

export default Home

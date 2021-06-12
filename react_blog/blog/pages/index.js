import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List } from 'antd'
import { FireFilled, PlaySquareOutlined, ClockCircleOutlined } from '@ant-design/icons'
import Header from '../components/Header'
import '../public/style/pages/index.css'
import Author from '../components/Author'
import Footer from '../components/Footer'
import axios from 'axios'
import apiPath from '../config/api'

const Home = (props) => {

  const iconStyle = {
    padding: '0'
  }
  const fireStyle ={
    padding: '0',
    color: 'red'
  }

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={props.data}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{pathname: '/detailed', query: {id: item.id}}} >
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span> <ClockCircleOutlined style={iconStyle}/> {item.addTime}</span>
                    <span> <PlaySquareOutlined style={iconStyle}/> {item.typeName}</span>
                    <span><FireFilled style={fireStyle}/> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(apiPath.getArticleList).then(
      (res) => {
        // console.log(res)
        // console.log('远程获取数据结果:', res.data.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}

export default Home

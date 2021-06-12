import { Breadcrumb, Col, List, Row } from 'antd'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import apiPath from '../config/api'
import Link from 'next/link'
import { FireFilled, PlaySquareOutlined, ClockCircleOutlined } from '@ant-design/icons'




const ListPage = (props) => {

  const [mylist, setMylist] = useState(props.data);

  useEffect(() => {
    setMylist(props.data)
  })

  const iconStyle = {
    padding: '0'
  }
  const fireStyle ={
    padding: '0',
    color: 'red'
  }
  return (
    <>
      <Head>
        <title>MyList</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <List
              itemLayout="vertical"
              dataSource={mylist}
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
    </>
  )
}

ListPage.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(apiPath.getListById + id)
      .then(res => { resolve(res.data) })
  })
  // console.log(await promise)
  return await promise
}


export default ListPage
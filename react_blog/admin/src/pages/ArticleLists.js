// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line
import { List, Row, Col, Model, message, Button } from 'antd';
// eslint-disable-next-line
import axios from 'axios'
// eslint-disable-next-line
import apiPath from '../config/api'

function ArticleLists(props) {

  // eslint-disable-next-line
  const [artticleList, setArticleList] = useState([])

  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>标题</Col>
            <Col span={4}>类别</Col>
            <Col span={4}>发布时间</Col>
            <Col span={4}>浏览次数</Col>
            <Col span={4}>操作</Col>
          </Row>
        }
        bordered
        dataSource={artticleList}
        renderItem={item => {
          return (
            <List.item>
            <Row className="list-div">
              <Col span={8}>{item.title}</Col>
              <Col span={4}>{item.typeName}</Col>
              <Col span={4}>{item.addTime}</Col>
              <Col span={4}>{item.view_count}</Col>
              <Col span={4}>
                <Button type='primary'>修改</Button>
                <Button type='danger'>删除</Button>
              </Col>
            </Row>
          </List.item>
          )
        }}
      ></List>
    </div>
  )
}

export default ArticleLists

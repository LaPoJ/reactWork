import React, { useState, useEffect } from 'react'
import '../public/style/components/herder.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import apiPath from '../config/api'


const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiPath.getTypeInfo).then(
        (res) => {
          setNavArray(res.data.data)
          return res.data.data
        }
      )
      setNavArray(result)
    }
    fetchData()


  }, [])

  const handleChangeType = (e) => {
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  const iconStyle = {
    fontSize: '18px'
  }

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={10}>
          <span className="header-logo">菜水鸡</span>
          <span className="header-txt">前端开发小菜鸟一个</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
          <Menu mode="horizontal" onClick={handleChangeType}>
            <Menu.Item key='0'>
              <HomeOutlined  style={iconStyle}/>
              首页
            </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id } >
                    {item.icon === 'HomeOutlined' ? <HomeOutlined  style={iconStyle}/> :
                    (item.icon === 'YoutubeOutlined' ? <YoutubeOutlined style={iconStyle}/> : (
                      item.icon === 'SmileOutlined'? <SmileOutlined style={iconStyle}/> : ''
                    ))}

                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header

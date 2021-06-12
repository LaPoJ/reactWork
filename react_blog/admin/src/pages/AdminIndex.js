import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../static/css/index.css'
import { Route, Link } from 'react-router-dom'
import AddArticle from './AddArticle';
import ArticleLists from './ArticleLists';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Index(props) {

  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          {/* 博客后台管理 */}
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <UserOutlined />
            <span>用户</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <DesktopOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">
              <Link to='/index/add/' >添加文章</Link>
            </Menu.Item>
            <Menu.Item key="artList">
              <Link to='/index/list/'>文章列表</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="6">
            <FileOutlined />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* { indexCom } */}
              <Route path='/index/' exact component={AddArticle} />
              <Route path='/index/add/' exact component={AddArticle} />
              <Route path='/index/list/' exact component={ArticleLists} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default Index

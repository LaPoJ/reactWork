import { ClockCircleOutlined, FireFilled, PlaySquareOutlined } from '@ant-design/icons'
import { Affix, Breadcrumb, Col, Row } from 'antd'
import axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import marked from 'marked'
import Head from 'next/head'
import React from 'react'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../public/style/pages/detailed.css'
import Tocify from '../components/tocify.tsx'
import apiPath from '../config/api'

// import 'markdown-navbar/dist/navbar.css'
// import ReactMarkdown from 'react-markdown'
// import MarkNav from 'markdown-navbar'

const Detailed = (props) => {
  // console.log(props)
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  renderer.heading = function(text, level, raw){
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,  //容错
    sanitize: false, // 忽略html
    table: true, //表格 前提是开启gfm
    breaks: false,
    smartLists: true, //列表样式
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  let markdown =
    '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'

    let html = marked(props.article_content)
    // let html = marked(markdown)

  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                {}
              </div>
              <div className="list-icon center">
                <span><ClockCircleOutlined style={{ padding: '0' }} /> 2019-06-28</span>
                <span><PlaySquareOutlined style={{ padding: '0' }} /> 视频教程</span>
                <span><FireFilled style={{ padding: '0', color: 'red' }} /> 5498人</span>
              </div>
              <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}} ></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
                { tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.id

  const promise = new Promise((resolve) => {
    axios(apiPath.getArticleById + id)
      .then(
        (res) => {
          // console.log(res)
          resolve(res.data.data[0])
        }
      )
  })

  return await promise
}

export default Detailed
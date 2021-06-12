import { Button, Col, DatePicker, Input, Row, Select, message } from 'antd'
import axios from 'axios'
import marked from 'marked'
import React, { useEffect, useState } from 'react'
import apiPath from '../config/api'
import '../static/css/addArticle.css'

const { Option } = Select
const { TextArea } = Input

function AddArticle(props) {

  const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('')   //文章标题
  const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [showDate, setShowDate] = useState()   //发布日期
  // const [updateDate, setUpdateDate] = useState() //修改日志的日期+
  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType, setSelectType] = useState('请选择类别') //选择的文章类别

  const getTypeInfo = () => {
    axios({
      method: 'get',
      url: apiPath.getTypeInfo,
      withCredentials: true
    })
      .then(res => {
        console.log(res.data)
        if (res.data.data === '未登录') {
          localStorage.removeItem('openId')
          props.history.push('/')
        } else {
          setTypeInfo(res.data.data)
        }
      })
  }

  useEffect(() => {
    getTypeInfo()
  }, [])

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartListsL: true,
    smartypants: false
  })

  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }



  const saveArticle = () => {
    if(!articleTitle){
      message.error('文章名称不能为空')
      return false
    }else if(!articleContent){
      message.error('文章内容不能为空')
      return false
    }else if(!introducemd){
      message.error('文章简介不能为空')
      return false
    }else if(!showDate){
      message.error('发布日期不能为空')
      return false
    }else if(selectedType === '请选择类别'){
      message.error('请选择文章类型')
      return false
    }
    let articleData = {}
    articleData.type_id = selectedType
    articleData.title = articleTitle
    articleData.article_content = articleContent
    articleData.introduce = introducemd
    let dataText = showDate.replace('-', '/')
    articleData.addTime = (new Date(dataText).getTime())/1000

    if (articleId === 0) {
      articleData.view_count = 0
      axios({
        method: 'post',
        url: apiPath.addArticle,
        data: articleData,
        withCredentials: true
      }).then(
        res => {
          setArticleId(res.data.insertId)
          if (res.data.isSuccess) {
            message.success('文章添加成功')
          }else{
            message.error('文章添加失败')
          }
        }
      )
    } else{
      articleData.Id = articleId
      axios({
        method: 'post',
        url: apiPath.updateArticle,
        data: articleData,
        withCredentials: true
      }).then(
        res => {
          if (res.data.isSuccess) {
            message.success('文章保存成功')
          }else{
            message.error('文章保存失败')
          }
        }
      )
    }

  }

  return (
    <div>
      <Row gutter={5}>
        <Col span={18} >
          <Row gutter={10}>
            <Col span={20} >
              <Input size='large' placeholder='博客标题'
                onChange={(e) => {
                  e.persist()
                  // console.log(e.target.value)
                  setArticleTitle(e.target.value)
                }}
              />
            </Col>
            <Col span={4}>
              <Select defaultValue={selectedType} size='large' onChange={ (e) => { setSelectType(e)}}>
                {
                  typeInfo.map((item, index) => {
                    return (
                      <Option key={index} value={item.Id} >{item.typeName}</Option>
                    )
                  })
                }
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea className='markdown-content' rows={35} placeholder='文章内容' onChange={changeContent} />
            </Col>
            <Col span={12}>
              <div className='show-html' dangerouslySetInnerHTML={{ __html: markdownContent }}>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6} >
          <Row>
            <Col span={24}>
              <Row>
                <Col span={3}></Col>
                <Col spam={9} flex='center'><Button className='article-change' size='large' >暂存文章</Button></Col>
                <Col spam={9} flex='center'><Button className='article-change' size='large' type='primary' onClick={saveArticle}>发布文章</Button></Col>
                <Col span={3}></Col>
              </Row>
            </Col>
            <br />
            <br />
            <br />
            <Col span={24}>
              <TextArea rows={10} placeholder="文章简介" onChange={changeIntroduce}></TextArea>
              <br />
              <br />
              <div className='introduce-html' dangerouslySetInnerHTML={{ __html: introducehtml }}></div>
            </Col>
            <br />
            <br />
            <br />
            <Col span={12} >
              <div className="data-select">
                <DatePicker placeholder='发布日期' size='large'
                  onChange={(data, datastring) => {
                    setShowDate(datastring)
                  }
                  }
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default AddArticle

let url = 'http://127.0.0.1:7003/admin/'

let apiPath = {
  checkLogin: url + 'checkLogin', //登录
  getTypeInfo: url + 'getTypeInfo', //文章类别
  addArticle: url + 'addArticle', //添加文章
  updateArticle: url + 'updateArticle', //添加文章
  getArticleList: url + 'getArticleList', //文章列表
}

export default apiPath
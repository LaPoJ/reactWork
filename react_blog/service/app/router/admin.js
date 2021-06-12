'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.index.index);
  router.post('/admin/checkLogin', controller.admin.index.checkLogin);
  router.get('/admin/getTypeInfo', adminauth, controller.admin.index.getTypeInfo);
  router.post('/admin/addArticle', adminauth, controller.admin.index.addArticle);
  router.post('/admin/updateArticle', adminauth, controller.admin.index.updateArticle);
  router.get('/admin/getArticleList', adminauth, controller.admin.index.getArticleList);
};

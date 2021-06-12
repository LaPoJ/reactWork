'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = 'hi api';
  }

  async checkLogin() {
    const userName = this.ctx.request.body.userName;
    const password = this.ctx.request.body.password;
    const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
      "' AND password = '" + password + "'";

    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: '登录成功', openId };

    } else {
      this.ctx.body = { data: '登录失败' };
    }
  }

  async getTypeInfo() {
    const resType = await this.app.mysql.query('SELECT * FROM TYPE');
    this.ctx.body = { data: resType };
  }

  async addArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.insert('article', tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId,
    };
  }

  async updateArticle() {
    const tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update('article', tmpArticle, { where: { Id: tmpArticle.Id } });
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body = {
      isSuccess: updateSuccess,
    };
  }

  async getArticleList() {
    const sql = 'SELECT article.id as id ,' +
      'article.title as title ,' +
      'article.introduce as introduce ,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime ," +
      'article.view_count as view_count ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
      'ORDER BY article.Id DESC';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
}

module.exports = IndexController;

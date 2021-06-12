'use strict';

module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log('ctx:', ctx.request, 'ctx结束===========');
    if (ctx.session.openId) {
      ctx.body = { data: '已登录' };
      console.log(ctx.session.openId);
      await next();
    } else {
      ctx.body = { data: '未登录' };
    }
  };
};

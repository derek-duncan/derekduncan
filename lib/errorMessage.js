module.exports = () => {
  return (ctx, next) => {
    if (ctx.errorMessage) return next();

    ctx.errorMessage = {
      notFound(data = {}) {
        ctx.status = 404;
        ctx.body = {
          error: 'notFound',
          payload: data,
        };
      }
    }
    return next();
  }
};

const marked = require('marked');

module.exports = (data) => {
  return marked(data);
};

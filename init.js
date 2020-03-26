const buildReact = require('./lib/react');
const buildVue = require('./lib/vue');

module.exports = async (answers) => {
  if (answers.framework && answers.framework === 'react') {
    buildReact(answers);
  } else if (answers.framework && answers.framework === 'vue') {
    buildVue(answers);
  }
}
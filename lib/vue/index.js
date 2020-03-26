const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const symbols = require('log-symbols');

const layoutIndex = require('./templates/layout-index');
const pageWelcomeIndex = require('./templates/pages-welcome-index');
const routesIndex = require('./templates/routes-index');
const mainConfig = require('./templates/main-config');

const components = (src) => {
  fs.mkdir(`${src}/components`, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${symbols.success} ${chalk.green('components文件夹创建完成')}`);
  });
}

const layout = (src, answers) => {
  fs.mkdir(`${src}/layout`, (err) => {
    if (err) {
      return console.error(err);
    }
    fs.writeFile(`${src}/layout/index.vue`, layoutIndex(answers), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`${symbols.success} ${chalk.green('layout文件夹创建完成')}`);
    });
  });
}

const pages = (src) => {
  fs.mkdir(`${src}/pages`, (err) => {
    if (err) {
      return console.error(err);
    }
    fs.mkdir(`${src}/pages/Welcome`, (err) => {
      if (err) {
        return console.error(err);
      }
      fs.writeFile(`${src}/pages/Welcome/index.vue`, pageWelcomeIndex(), (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(`${symbols.success} ${chalk.green('pages文件夹创建完成')}`);
      });
    });
  });
}

const routes = (src, answers) => {
  fs.mkdir(`${src}/routes`, (err) => {
    if (err) {
      return console.error(err);
    }
    fs.writeFile(`${src}/routes/index.js`, routesIndex(answers), (err) => {
      if (err) {
        return console.error(err);
      }
      console.log(`${symbols.success} ${chalk.green('routes文件夹创建完成')}`);
    });
  });
}

const singleConfig = (src) => {
  fs.writeFile(`${src}/main.config.js`, mainConfig(), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`${symbols.success} ${chalk.green('main.config.js文件创建完成')}`);
  });
}

module.exports = async (answers) => {
  const src = path.resolve('./');
  fs.mkdir(answers.dirname, (err) => {
    if (err) {
      return console.error(err);
    }
    components(`${src}/${answers.dirname}`);
    layout(`${src}/${answers.dirname}`, answers);
    pages(`${src}/${answers.dirname}`);
    routes(`${src}/${answers.dirname}`, answers);
    singleConfig(`${src}/${answers.dirname}`);
  });
}
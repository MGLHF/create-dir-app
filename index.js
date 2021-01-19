#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const fs = require('fs');

const buildTemplate = require('./init');

program.version('1.0.0', '-v, --version')
  .command('init <name>')
  .action((name) => {
    if (!fs.existsSync(name)) {
      inquirer.prompt([
        {
          name: 'dirname',
          message: '请输入文件名称'
        },
        {
          name: 'spaname',
          message: '请输入single-spa注册名称'
        },
        {
          type: 'list',
          name: 'framework',
          message: '选择框架类型',
          choices: [
            { name: 'React', value: 'react' },
            { name: 'Vue', value: 'vue' },
          ]
        },
        {
          name: 'route',
          message: '请输入该项目路由前缀（如：profix）'
        }
      ]).then((answers) => {
        const spinner = ora('正在创建...');
        spinner.start();
        buildTemplate(answers).then(() => {
          spinner.stop();
          console.log(`${symbols.success} ${chalk.green('文件夹创建完成')}`);
          console.log(`${chalk.bgWhite.red('注意:请在single-spa.config.js文件中appConfig下添加如下代码')}`);
          console.log(`${chalk.white(`
            {
            name: '${answers.spaname}',
            entryPath: () => import('./${answers.dirname}/main.config'),
            routerRule: location => location.pathname.startsWith('/${answers.route}'),
            }
          `)}`);
        }).catch(() => {
          spinner.stop();
          console.log(`${symbols.error} ${chalk.red('文件夹创建失败')}`);
        });
      });
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log(symbols.error, chalk.red('文件夹已存在'));
    }
  })
program.parse(process.argv);
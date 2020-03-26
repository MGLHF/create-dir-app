module.exports = (answers) => `
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/${answers.route}',
      name: '${answers.route}',
      component: () => import('../pages/Welcome'),
    },
  ],
});

export default router;
`;
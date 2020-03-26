module.exports = (answers) => `
<template>
  <div id="${answers.dirname}">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
<style scoped lang="less">
#${answers.dirname} {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
`;
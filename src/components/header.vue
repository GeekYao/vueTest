<template>
  <div id="app">
      <div class="header">首页</div>
      <div class="content">内容</div>
      <div class="footer">
          <router-link to="/foo">Go to Foo</router-link>
          <router-link to="/bar">Go to Bar</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="css">
    #app{
        height: 100%;
        width: 100%
    }
    .header,.footer{
        width: 100%;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
    }
    .footer{
        position:fixed;
        bottom: 0;
        left: 0;
        background: dimgray;
    }
    .content{
        width: 100%;
        height: 2.8rem;
        background: brown;
    }

</style>



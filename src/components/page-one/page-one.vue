<template>
  <div class="page">
    <div class="header">头部1</div>
    <div class="content">
      <router-link tag="a" class="item" to="/pageTwo">点击我进入第二个页面</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .header
    height: 37px
    line-height: 37px
    background-color: $color-theme
    color: #fff
    text-align: center
  .content
    margin-top: 20px
  .item
      display: block
      text-align: center
</style>

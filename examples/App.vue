<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MainTest />

    <m-card imgSrc="a.png" summary="测试~测试~测试~测试~测试~测试~" />
    <hr />

    <m-card imgSrc="b.png" summary="测试~测试~测试~测试~测试~测试~">
      <template v-slot:footer>
        <div>
          <div>测试~</div>
          <div>￥测试~</div>
        </div>
      </template>
    </m-card>
    <hr />

    <m-card imgSrc="b.png" :width="370" :imgHeight="90">
      测试~测试~测试~测试~测试~测试~
      <template v-slot:footer>
        <div>
          <div>测试~</div>
          <div>￥测试~</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

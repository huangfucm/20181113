<template>
  <div id="app">
    <topbar></topbar>
    <router-view/>
    <div class="cb"></div>
    <bottom></bottom>
  </div>
</template>

<script>
  import  topbar from "./components/topbar"
  import  bottom from "./components/bottombar"
export default {
  name: 'App',
  beforeCreate:function () {
    this.$router.push("/home")
  },
  components:{
    topbar,
    bottom
  }

}
</script>

<style>
*{
	margin: 0;
  padding: 0;
  font-family: 微软雅黑;
  box-sizing: border-box;
}

</style>

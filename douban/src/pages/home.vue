
<template>
  <div>
    <div class="hei"></div>
    <div class="main">
      <newlist></newlist>
    </div>
  </div>
</template>


<script>

	import  topbar from "../components/topbar"
	import  newlist from "../components/newlist"
  export default {
    	components:{
        newlist
    	}
    }

</script>
<style>
  .hei{
    height: 60px;
  }
  .main{
    width: 90%;
    margin: 0 auto;
  }
</style>

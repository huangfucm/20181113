<template>
	<div class="main">
    <div class="hei"></div>
    <div>
      <boraditem :xinxi="xinxi"></boraditem>
    </div>
	</div>
</template>
<script>
		import  boraditem from "../components/boraditem"
  export default {
    	components:{
        boraditem
    	},
    data:function () {
      return{
        xinxi:[],
      }
    },
    beforeCreate: function () {
      this.axios.get("/news/index").then((response) => {
          this.xinxi = response.data.arrdata.guangbo;
          console.log(this.xinxi)
        }
      )}
    }

</script>
<style>
	.hei{
    height: 60px;
  }

</style>

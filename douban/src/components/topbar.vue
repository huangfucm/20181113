
<template>
  <div class="header">
	  	<div class="top-nav">
	  		<ul class="left">
	  			<li ><router-link to="/home">logo</router-link></li>
	  		</ul>
		 	<ul class="right">
		 		<li><router-link to="/movie">电影</router-link></li>
		 		<li><router-link to="/book">图书</router-link></li>
		 		<li><router-link to="/broadcast">广播</router-link></li>
		 		<li><router-link to="/group">小组</router-link></li>
		 		<li><i class="el-icon-menu"></i></li>
		 		<li></li>
		 	</ul>
		 	<div class="cb"></div>
	  	</div>
  </div>
</template>


<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>
<style>
	.header{
		border-top:1px solid #eeeeee ;
		border-bottom:1px solid #eeeeee ;
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: white;
    z-index: 555;
	}
  .top-nav{
    width: 90%;
    margin: 0 auto;
  }
  .top-nav .left{
		float: left;
	}
	.left li{
		list-style: none;
		float: left;
		line-height: 60px;
	}
  .top-nav .right{
		float: right;
	}
	img{
		display: block;
	}
	.right li{
		list-style: none;
		float: left;
		line-height: 60px;
		padding-left: 10px;
    font-size: 1.6rem;
	}
	.cb{
		clear: both;
	}
</style>

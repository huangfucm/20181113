<template>
  <div>
    <div class="movieitem">
        <img :src="img"/>
        <p class="titlename">{{title}}</p>
        <p><el-rate v-model="xing" disabled show-score text-color="#ff9900" score-template="{value}">
        </el-rate>
        </p>
    </div>
  </div>
</template>


<script>
  export default{
    data() {
      return {
        value5: 3.7,
      }
    },
    props:['img','title','xing']
  }
</script>

<style>
	.movieitem{
		list-style: none;
		float: left;
		margin-right: 10px;
    text-align: center;
    padding-bottom: 10px;
	}
  .titlename{
    margin: 6px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movieitem img{
    width: 127px;
    height: 180px;
  }
  .moviecha{
    width: 1300px;
    overflow: hidden;
  }
  .el-rate__icon {
    font-size: 16px;
    margin-right: 3px;
  }
</style>

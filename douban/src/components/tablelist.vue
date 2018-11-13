<template>
  <div>
    <div class="flitem">
      <span>{{lei}}</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>

</template>
<script>
  export default{
    props:['lei']
  }
</script>
<style>
.flitem{
 width: 50%;
  border-top: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  float: left;
}
  .flitem span{
    display: inline-block;
    width: 80%;
    color: #42bd56;
    font-size: 1.62rem;
    height: 4.2rem;
    line-height: 4.2rem;
  }
.flitem i{
  display: inline-block;
  text-align: right;
  width: 10%;
}
</style>

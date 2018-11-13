<template>

    <div class="group">
        <div class="group-top">
          <div class="group-left"><img :src="img"><p>{{title}}</p></div>
          <div class="group-right"><p>{{num}} 人</p></div>
          <div class="cb"></div>
        </div>
        <p class="group-bottom">{{genxin}}{{mintitle}}</p>
    </div>

</template>
<script>
  export default{
data:function () {
  return{
    boradlist:[]
  }
  },
    props:["img","title","genxin","num","mintitle"],

  }
</script>
<style scope>
  .group{
border-bottom: 1px solid #eeeeee;
    padding: 20px 0;
  }
.group-left{
  width: 80%;
  float: left;
}
.group-left img{
  display: block;
  float: left;
}
.group-left p{
  float: left;
  margin: 10px  10px;
  font-size: 1.8rem;
  color: #111111;
}
.cb{
  clear: both;
}
  .group-right{
    width: 20%;
    float: right;
    margin: 10px 0;
  }
  .group-bottom{
    margin: 10px 0;
    color: #aaaaaa;
    font-size: 1.5rem;
  }
</style>

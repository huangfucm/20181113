
<template>
<div class="bottom">
  <div class="doub">
    <div class="top">
      <div class="bot-left"><img src="../img/ic_launcher.png"></div>
      <div class="bot-right">
        <h3 style="font-size: 3rem; font-weight: 500;">豆瓣</h3>
        <br/>
        <p>我们的精神角落</p>
      </div>
      <div class="cb"></div>
    </div>
    <div class="cb"></div>
  </div>
  <p class="bot">去豆瓣App Store 免费下载 ios客户端</p>
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
  .doub{
    width: 100%;
  }
  .bottom{
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
  }
  .top{
    margin: 0 auto;
  }
.bot-left{
  float: left;
}
.bot-right{
  float: left;
  margin-left: 2%;
}
.bot-right p{
  font-size: 1.68rem;
}
  .bot{
    width: 100%;
    text-align: center;
    color: #42bd56;
    font-size: 1.44rem;
    margin-top: 4%;
  }
  .cb{
    clear: both;
  }
  .bot-left img{
  display: block;
    width: 70px;
}

</style>

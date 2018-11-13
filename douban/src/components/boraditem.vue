<template>
  <div>
      <div class="broad" v-for="(v,index) in this.xinxi">
        <div class="boradleft">
          <div class="tutu"></div>
        </div>
        <div class="boradright">
          <h3>豆瓣 <span>{{v.tujing}}</span></h3>
          <p class="time">{{v.time}}</p>
          <p class="content1">{{v.content1}}</p>
          <div class="content2">
            <h3>{{v.title}}</h3>
            <p>{{v.content2}}</p>
          </div>
          <div class="bottm">
            <p><img src="../img/ic_like.png" alt=""><span>{{v.dianzan}}</span></p>
            <p><img src="../img/ic_comments_profile.png" alt=""><span>{{v.pinglun}}</span></p>
            <p><img src="../img/ic_retweet_normal.png" alt=""><span>{{v.zhuanfa}}</span></P>
           <p class="more"><img src="../img/ic_more_action_overflow.png" alt="" /></p>
          </div>
        </div>
        <div class="cb"></div>
      </div>
  </div>

</template>
<script>
  export default{
    props:["xinxi"]
  }
</script>
<style>
  .broad{
    margin-top: 5%;
    width: 100%;
  }
.tutu{
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 120px;
  background-image:url("../img/ic_launcher.png");
  background-size: cover;
}
  .boradleft{
    float: left;
    width: 15%;
  }
.boradright{
  float: left;
  width: 85%;
  padding-left: 15px;
}
  .content{
    font-size: 1.6rem;
  }
  .boradright h3{
    font-size: 1.7rem;
    color:#494949;
  }
.boradright h3 span{
  color: #aaaaaa;
  font-weight: 500;
}
  .time{
    color: #aaaaaa;
    font-size: 1.4rem;
  }
  .content2{
    margin-top: 15px;
    background-color: #eeeeee;
    margin-bottom: 10px;
    padding: 20px;
  }
  .content1{
    font-size: 1.46rem;
    color: #111111;
  }
  .content2 p{
    font-size: 1.2rem;
    color: #aaaaaa;
    margin-top: 10px;
  }
  .content2 h3{
    font-weight: 500;
  }
  .broad{
    padding-bottom: 5%;
    border-bottom: 1px solid darkgray;
  }
  .bottm>P{
    float: left;
    width: 25%;
  }
  .bottm>P>span{
    display: block;
    float: left;
    height: 25px;
    line-height: 25px;

  }
  .time{
  	margin: 10px 0;
  }
  .bottm img{
    width: 25px;
    float: left;
    display: block;
  }
  .more{
  	width: 10%;
  	padding-top: 10px;
  }
</style>

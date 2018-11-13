<template>
  <div>
    <div class="item" v-for="v in newlist">
      <div class="new-l">
        <h3>{{v.title}}</h3>
        <p class="newcont">{{v.content}}</p>
        <p class="name">by {{v.owner.name}}</p>
      </div>
      <div class="new-r">
        <img :src="v.image">
      </div>
      <div class="cb"></div>
    </div>
  </div>

</template>

<script>
  export default{
    data: function () {
        return{
          newlist:[]
        }

    },
    beforeCreate: function () {
      this.axios.get("/news/index").then((data) => {
        this.newlist = data.data.arrdata.shouye;
        console.log(this.newlist);
      })
    }
  }
</script>

<style>
.newcont{
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
  margin: 10px 0;
  font-size: 1.2rem;
  color: #999999;
}
.name{
  color: #999999;
}
  .new-l{
    width: 65%;
    float: left;
  }
.new-l h3{
  font-size: 1.7rem;
  font-weight: 500;
  color:#111111;
}
  .new-r{
    width: 35%;
    float: left;
  }
.new-r img{
  display: block;
  float: right;
  width: 85px;
  height: 105px;
}
  .item{
    margin-top: 10px ;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgrey;
  }
</style>

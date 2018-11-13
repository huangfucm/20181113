<template>
<div>
  <div class="borad">
    <slot name="boradone"></slot>
    <div>
      <div v-for="(v,k) in this.xiaozu">
        <groupitem :img="v.images.small" :title="v.title" :mintitle="v.group_topic.title" :num="v.group_member" :genxin="v.group_topic.time"></groupitem>
      </div>
    </div>
    <slot name="boradtwo"></slot>
  </div>
</div>
</template>
<script>
  import groupitem from "./groupitem"
export default{
components:{
  groupitem
},
  data:function () {
    return{

    }
  },
  props:["xiaozu"],
//  beforeCreate:function () {
//    this.axios.get("/news/index").then((data)=>{
//      this.xiaozua=data.data.arrdata.xiaozua;
//      console.log(this.xiaozua)
//    })
//  }
}
</script>
<style>

</style>

<template>
	<div class="main">
    <div class="hei"></div>
    <groupfu :xiaozu="xiaozua">
        <h3 class="grouptitle" slot="boradone">租房找室友</h3>
        <h3 class="moregroup" slot="boradtwo">更多相关小组</h3>
    </groupfu>
    <groupfu :xiaozu="xiaozub">
      <h3 class="grouptitle" slot="boradone">热门小组</h3>
      <h3 class="moregroup" slot="boradtwo">更多相关小组</h3>
    </groupfu>
    <groupfu :xiaozu="xiaozuc">
      <h3 class="grouptitle" slot="boradone">买买买</h3>
      <h3 class="moregroup" slot="boradtwo">更多相关小组</h3>
    </groupfu>
	</div>
</template>
<script>
    import groupfu from "../components/groupfu"
  export default {
    	components:{
        groupfu
    	},
    data:function () {
      return{
         xiaozua:[],
        xiaozub:[],
        xiaozuc:[]
      }
    },
    beforeCreate:function () {
      this.axios.get("/news/index").then((data)=>{
        this.xiaozua=data.data.arrdata.xiaozua;
        console.log(this.xiaozua);
        this.axios.get("/news/index").then((data)=>{
          this.xiaozub=data.data.arrdata.xiaozub;
          console.log(this.xiaozub)
        });
        this.axios.get("/news/index").then((data)=>{
          this.xiaozuc=data.data.arrdata.xiaozuc;
          console.log(this.xiaozuc)
        })

      })
    },

    }

</script>
<style>
.grouptitle{
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3% 0;
}
  .moregroup{
    font-size: 1.48rem;
    color: #42db56;
    font-weight: 500;
    text-align: center;
    padding: 3% 0;
  }

</style>

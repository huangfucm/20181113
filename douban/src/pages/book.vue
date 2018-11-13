<template>
  <div>
    <div class="hei"></div>
    <div class="main">
      <div>
        <div class="top">
          <h3 slot="one">最受关注图书 | 虚构类</h3>
          <a slot="two">更多</a>
        </div>
        <div class="movieone" >
          <movielist :movie="books" start="0" end="8"></movielist>
        </div>
      </div>
      <div>
        <div class="top">
          <h3 slot="one">最受关注图书 | 非虚构类</h3>
          <a slot="two">更多</a>
        </div>
        <div class="movieone" >
          <movielist :movie="books" start="8" end="16"></movielist>
        </div>
      </div>
      <div>
        <div class="top">
          <h3 slot="one">发现好书</h3>
        </div>
        <div class="fa">
          <div class="chang">
            <div v-for="(v,index) in faxianlist">
              <div v-if="v.line!=true" style="float:left">
                <faxian :text="v.title" :color="v.color"></faxian>
              </div>
              <div v-else style="clear:both"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="top">
          <h3 slot="one">分类浏览</h3>
        </div>
        <div class="fenlei">
          <div class="list" v-for="(v,index) in books">
            <div v-if="index<17">
              <tablelist :lei="v.title"></tablelist>
            </div>
          </div>
        </div>
      </div>
	</div>
  </div>
</template>
<script>
  import  movielist from "../components/movielist"
  import  faxian from "../components/fanxian"
  import  tablelist from "../components/tablelist"
  export default {
    components: {
      movielist,
    faxian,
    tablelist
    },
    data:function () {
        return{
          faxianlist:[],
          books:[]
        }

    },
    beforeCreate: function () {
      this.axios.get("/news/index").then((response) => {
          this.faxianlist = response.data.arrdata.goodBook;
          console.log(this.faxianlist)
        }
      ),
        this.axios.get("/news/index").then((response) => {
            this.books = response.data.arrdata.books;
            console.log(this.faxianlist)
          }
        )
    }
  }

</script>
<style>
  .top{
    height: 40px;
    line-height: 40px;
  }
  .hei{
    height: 60px;
  }
  .top h3{
    font-weight: 500;
    float: left;
    font-size: 1.68rem;
  }
  .top a{
    display: block;
    color: #42bd96;
    float: right;
    font-size: 1.44rem;
  }
  .main{
    width: 90%;
    margin: 0 auto;
  }
  .fa{
    width: 100%;
    overflow: auto;
  }
  .chang{
    width: 800px;
    overflow: hidden;
  }
</style>

<template>
  <div>
    <div class="hei"></div>
      <div class="main">
        <div>
          <div class="top">
            <h3 slot="one">热映电影</h3>
            <a slot="two">更多</a>
          </div>
          <div class="movieone" >
            <movielist :movie="movielist" start="0" end="8"></movielist>
          </div>
        </div>
        <div>
          <div class="top">
            <h3 slot="one">免费在线观影</h3>
            <a slot="two">更多</a>
          </div>
          <div class="movieone">
            <movielist :movie="movielist" start="8" end="16"></movielist>
          </div>
        </div>
        <div>
          <div class="top">
            <h3 slot="one">新片速递</h3>
            <a slot="two">更多</a>
          </div>
          <div class="movieone">
            <movielist :movie="movielist" start="16" end="24"></movielist>
          </div>
        </div>
        <div>
          <div class="top">
            <h3 slot="one">发现好电影</h3>
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
            <div class="list" v-for="(v,index) in movie">
              <div v-if="index<17">
                <tablelist :lei="v.genres[1]"></tablelist>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
		import movielist from "../components/movielist"
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
        movie:[]
      }
    },
    beforeCreate: function () {
      this.axios.get("/news/index").then((response) => {
          this.faxianlist = response.data.arrdata.faxianhaodianying;
          console.log(this.faxianlist)
        }
      ),
        this.axios.get("/news/index").then((response) => {
            this.movie = response.data.arrdata.movie;
            console.log(this.faxianlist)
          }
      ),
      this.axios.get("/news/index").then((response)=>{
        this.movielist=response.data.arrdata.movie;
        console.log(this.movielist)
      })
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
  .movieone{
    overflow: hidden;
    height: 230px;
  }
  .fa{
    width: 100%;
    overflow: auto;
  }
  .chang{
    width: 1000px;
    overflow: hidden;
  }
</style>

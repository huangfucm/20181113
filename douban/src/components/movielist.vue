<template>
	<div>
		<div>
      <slot name="one"></slot>
      <slot name="two"></slot>
		</div>
		<div class="movielist">
      <div class="hot">
        <div v-for="(v,index) in this.movie">
         <div v-if="start<=index&&index<end">
           <movieitem :img="v.images.small" :title="v.title" :xing="v.rating.average"></movieitem>
         </div>
        </div>
      </div>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	import movieitem from "./movieitem"
	export default{
		components:{
			movieitem
		},
    props:["movie","start","end"]
    ,
    data() {
      return {
        movielist:[]
      }
    }

	}
</script>

<style>
.movielist{
  width: 100%;
  overflow: auto;
}
  .hot{
    width: 1200px;
    overflow: hidden;
  }
</style>

<template>
  <div>
    <div class="fanitem">
      <span class="text"  :style="{color:color,borderColor:color}">{{text}}</span>
    </div>
  </div>

</template>
<script>
export default{
props:['text','color','line']
}
</script>
<style>
.fanitem{
border-radius: 5px;
  margin: 10px 10px;
}
  .text{
    display: inline-block;
    border-radius: 5px;
    padding: 10px 10px;
    border: 1px solid red;
  }
</style>

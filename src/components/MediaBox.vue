<template>
  <div>
    <div class="avatar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8m-XGir_c2KNJYybYe4zAIRPdDRg-k7GFwI3PDyEUA&s" alt="">
    </div>
    <slot name="heading"></slot>
<!--    <slot name="paragraph"></slot>-->
    <slot v-bind:text="text"></slot>
  </div>
</template>

<script>
export default {
  name: "MediaBox",
  data(){
    return {
      text:"today，the weather is very good"
    }
  }
}
</script>

<style scoped>
.avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
</style>

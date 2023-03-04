<template>
  <div>
    我有一个梦想，这个梦想深深扎根于我灵魂深处。
    <MediaBox>
      <h2 slot="heading">Adam Jahr</h2>
<!--      <p slot="paragraph">My words.</p>-->
      <template v-slot:default="params">
        <p>My words.</p>
        <p>{{params.text}}</p>
      </template>
    </MediaBox>
  </div>
</template>

<script>
import MediaBox from "@/components/MediaBox";
export default {
  name: "AboutUs",
  components:{
    MediaBox
  }
}
</script>

<style scoped lang="css">

</style>

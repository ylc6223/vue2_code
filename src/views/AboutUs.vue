<template>
  <div>
    <div>count:{{count}}</div>
    <button @click="incrementNum">+</button>
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
import {mapGetters, mapState} from "vuex";
export default {
  name: "AboutUs",
  components:{
    MediaBox
  },
  computed:{
    // ...mapState(["count"])
    ...mapGetters("user",["count"])
  },
  methods:{
    incrementNum(){
      this.$store.dispatch("user/increment",3)
    }
  }
}
</script>

<style scoped lang="css">

</style>

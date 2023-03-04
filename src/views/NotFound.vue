<template>
    <div>
        <h1>哎呀!</h1>
        <h3>The {{ resource }} 你要找的页面不在这里.</h3>
        <router-link :to="{ name: 'event-list' }">返回到主页</router-link>
    </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <vContainer>
    記事ID：{{$route.params.id}}のページ
    <br>
    記事ID（props渡し）：{{idp}}のページ
  </vContainer>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    idp: Number
  }
}
</script>
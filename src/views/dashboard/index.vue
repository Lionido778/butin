<template>
  <div>
    <GithubCorner class="githubCorner"></GithubCorner>

  </div>
</template>

<script>
import GithubCorner from '../../components/GithubCorner'


export default {
  name: "index",
  components: {
    GithubCorner,

  }
}
</script>

<style scoped>
.github-corner {
  float: right;
}
</style>

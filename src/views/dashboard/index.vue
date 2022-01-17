<template>
  <div>
    <GithubCorner class="githubCorner"></GithubCorner>
    <PanelGroup></PanelGroup>
  </div>
</template>

<script>
import GithubCorner from '../../components/GithubCorner'
import PanelGroup from "./components/PanelGroup";


export default {
  name: "index",
  components: {
    GithubCorner,
    PanelGroup
  }
}
</script>

<style scoped>
.githubCorner {
  float: right;
}
</style>

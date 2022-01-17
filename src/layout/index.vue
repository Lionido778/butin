<template>
  <el-container>
    <el-aside width="auto">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <topbar></topbar>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from './components/sidebar'
import topbar from './components/topbar'

export default {
  name: "index",
  components: {
    sidebar,
    topbar,
  }
}
</script>

<style scoped>

/*消除滚动条*/
.el-aside::-webkit-scrollbar {
  width: 0 !important
}

.el-aside {
  margin: 5px 10px;
  background-color: #555555;
  border-radius: 15px 15px 15px 15px;
}

.el-container {
  height: 100%;
}

.el-header {
  margin: 5px 10px 5px 0;
  background-color: #fff;
  border-radius: 15px 15px 0px 0px;
}

.el-footer {
  margin: 5px 10px 5px 0;
  background-color: #5f61a0;
  border-radius: 0px 0px 15px 15px;
}

.el-main {
  margin-right: 10px;
  position: relative;
  overflow: hidden;
  background-color: cadetblue;
  padding: 0;
}
</style>

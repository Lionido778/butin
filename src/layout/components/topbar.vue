<template>
  <div class="topbar">
    <Breadcrumb class="breadcrumb"></Breadcrumb>
    <Dropdown class="dropdown"></Dropdown>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb/breadcrumb'
import Dropdown from '../../components/Dropdown/dropdown'

export default {
  name: "topbar",
  components: {
    Breadcrumb,
    Dropdown,
  }
}
</script>

<style scoped>
/* 写样式的时候必须定义好顶级父级元素的 属性包括高度、溢出隐藏、定位 */
.topbar{
  height: 60px;
  overflow: hidden;
  position: relative;
}
.breadcrumb {
  float: left;
  cursor: pointer;
}

.dropdown {
  float: right;
}
</style>

<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item v-for="(item,index) in breadList" :key="index"
                        :to="{ path: item.path }">
      {{ item.meta }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      breadList: [] // 路由记录集合
    };
  },
  methods: {
    //判断是不是首页  因为本项目 path ： / 比较特殊
    getBreadcrumb: function () {
      let matched = this.$route.matched;
      console.log(matched)
      if (matched[0].path === "" || matched[0].name === undefined) {
        //删除 matched第一个元素 matched[0]
        matched.shift()
        //拼接新的 matched[0]
        matched = [{path: "/", meta: "首页"}].concat(matched);
      } else {
        matched = [{path: "/", meta: "首页"}].concat(matched);
      }

      console.log(matched)
      this.breadList = matched
    }
  },
//初始化加载
  created() {
    this.getBreadcrumb()
  }
  ,
//检测每次路由变化
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }

}
</script>

<style scoped>
.breadcrumb {
  display: inline-block;
  font-size: 16px;
  line-height: 60px;
  margin-left: 8px;
}

</style>

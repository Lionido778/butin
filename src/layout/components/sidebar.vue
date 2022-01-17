<template>
  <div class="menu" style="height: 100%">
    <el-menu default-active="Paper-manager" class="el-menu-vertical"
             :collapse="isCollapse" :collapse-transition="true" text-color="#000" active-text-color="#ffd04b"
             background-color="#fff">
      <!--   box   -->
      <div class="box">
        <h3 v-show="!isCollapse">Butin后台管理系统</h3>
        <h3 v-show="isCollapse">Butin</h3>
        <el-divider></el-divider>
        <!-- 展开显示 avatar -->
        <div v-show="!isCollapse" class="avatar">
          <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <div class="desc">
            <p>欢迎回来</p>
            <p>{{ admin }}</p>
          </div>
        </div>
        <!-- 折叠显示 avatar -->
        <div v-show="isCollapse" class="avatar-isCollapse">
          <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <el-divider></el-divider>
      </div>
      <!--一级菜单-->
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!--二级菜单-->
      <el-submenu :index="item.name" v-for="(item, index) in hasChildren" :key="index">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item :index="subitem.path" v-for="(subitem,sunindex) in item.children" :key="sunindex"
                      @click="clickMenu(subitem)">
          <i :class="'el-icon-'+subitem.icon"></i>
          <span slot="title">{{ subitem.label }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 底部工具栏 -->
    <div v-show="!isCollapse" class="bottom-box">
      <div class="item"><i class="el-icon-more"></i></div>
      <div class="item"><i class="el-icon-share"></i></div>
      <div class="item"><i class="el-icon-s-fold" @click="collapseMenu"></i></div>
    </div>
    <div v-show="isCollapse" v-if="" class="bottom-box-collapse" @click="collapseMenu">
      <i class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      admin: "Lionido",
      menus: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          label: '仪表盘',
          icon: 'set-up'
        },
        {
          name: 'Paper-manager',
          label: '文章管理',
          icon: 'collection-tag',
          children: [
            {
              path: '/pager-manager/manage',
              name: 'Manage',
              label: '已发布',
              icon: 'edit-outline',
            },
            {
              path: '/pager-manager/write',
              name: 'Write',
              label: '写文章',
              icon: 'edit-outline',
            },
            {
              path: '/pager-manager/photo',
              name: 'Photo',
              label: '图床',
              icon: 'picture-outline',
            },
            {
              path: '/pager-manager/comment',
              name: 'Comment',
              label: '评论',
              icon: 's-comment',
            }
          ]
        },
        {
          path: '/user-manager',
          name: 'User-manager',
          label: '用户管理',
          icon: 'user'
        },
        {
          path: '/setting',
          name: 'Setting',
          label: '系统设置',
          icon: 'setting'
        },
        {
          path: '/tools',
          name: 'Tools',
          label: '工具',
          icon: 's-tools'
        },
      ]
    }
  },
  //计算属性
  computed: {
    //没有子菜单
    noChildren() {
      return this.menus.filter(item => !item.children)
    },
    //有子菜单 (这样设置会有一个问题 就是有子菜单的 永远会在没有子菜单的下面）
    hasChildren() {
      return this.menus.filter(item => item.children)
    },
    isCollapse() {
      // 这里的数据就是从vuex取得
      console.log(this.$store.state.isCollapse)
      return this.$store.state.isCollapse
    }
  },
  methods: {
    //跳转路由 根据名称跳转
    clickMenu(item) {
      this.$router.push({name: item.name})
      console.log(this.$router)
    },

    //控制左侧菜单是否折叠
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }

  }
}
</script>

<style scoped>

.el-menu-vertical {
  height: 560px;
  padding-bottom: 110px;
}

.bottom-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 202px;
  background-color: #5f61a0;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  border-top: 1px rgba(238, 238, 238, 0.04);
  margin-bottom: 5px;
}

.bottom-box-collapse {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 65px;
  background-color: #5f61a0;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  border-top: 1px rgba(238, 238, 238, 0.04);
  margin-bottom: 5px;
}

.bottom-box .item {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.bottom-box .item:hover {
  background-color: #e6a255;
}

.bottom-box-collapse:hover {
  background-color: #e6a255;
}

.box {
  text-align: center;
}

.el-divider {
  margin: 0px;
}

.box h3 {
  display: flex;
  line-height: 60px;
  justify-content: center;
  align-items: center;
  padding: 0 9px;
  margin: 0;
}

.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: 60px;
  margin: 0 10px;
}

.avatar-isCollapse {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px 8px;
}

.desc{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100px;
  font-size: 14px;
}
.desc:before{
  display: inline-block;

}
.desc p{
  margin: 3px 6px;
}

</style>

<template>
  <div class="drop-container">
    <el-dropdown>
      <div class="avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>Logout</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "dropdown"
}
</script>

<style scoped>
.drop-container {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.el-dropdown {
  width: 60px;
}

.avatar {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
}

</style>

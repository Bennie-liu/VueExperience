<template>
  <div class="asider">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          mode="vertical"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template #title>选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>导航二</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    "Asider";
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    toggleClick() {
      console.log("Asider.vue组件...");
      this.isCollapse = !this.isCollapse;
    },
  },
});
</script>

<style scoped>
.asider {
  height: 100vh;
}
/* 修改Element菜单样式 */
.el-menu {
  height: 100vh;
}
/* 此样式作用为消除左边菜单折叠卡顿 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  height: 100vh;
}
</style>
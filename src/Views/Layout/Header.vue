<template>
  <div class="header">
    <svg class="icon header-left" aria-hidden="true" @click="toggleClick">
      <use
        :xlink:href="foldIcon ? '#ali-icon-s-fold' : '#ali-icon-s-unfold'"
      ></use>
    </svg>

    <div class="header-right">
      <svg class="icon full-screen" aria-hidden="true" @click="screenFull">
        <use
          :xlink:href="
            fullScreen
              ? '#ali-icon-contract-outline'
              : '#ali-icon-expand-outline'
          "
        ></use>
      </svg>

      <div class="change-language">
        <el-dropdown style="font-size: 20px">
          <svg
            class="icon el-dropdown-link"
            style="margin-bottom: 10px"
            aria-hidden="true"
          >
            <use xlink:href="#ali-icon-language"></use>
          </svg>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="chinese">简体中文</el-dropdown-item>
              <el-dropdown-item @click="english">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <img alt="photo" src="../../assets/userphoto.png" />
    </div>
  </div>
  <div class="tager"></div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import screenFull from "screenfull";

export default defineComponent({
  setup() {
    "Header";
  },
  data() {
    return {
      foldIcon: true,
      fullScreen: false,
    };
  },
  methods: {
    toggleClick() {
      this.foldIcon = !this.foldIcon;

      console.log("Header.vue折叠按钮被点击...");
      this.$emit("toggleClick");
    },
    screenFull() {
      if (!screenFull.isEnabled) {
        return false;
      }
      this.fullScreen = !this.fullScreen;
      screenFull.toggle();
    },
    english() {
      alert(1);
    },
    chinese() {
      alert(2);
    },
  },
});
</script>
<style  scoped>
.header {
  width: 100%;
  height: 50px;
}
.tager {
  background-color: #e4e3e3;
  height: 30px;
}
.header-left {
  font-size: 24px;
  padding-left: 10px;
  float: left;
  cursor: pointer;
  width: 1.1em;
  height: 2.1em;
}
i:hover {
  color: #048ac9;
}
.header-right {
  float: right;
  font-size: 24px;
  color: #5c6b77;
  position: relative;
  height: 100%;
  line-height: 50px;
  margin-right: 10px;
}
.full-screen {
  cursor: pointer;
  width: 1em;
  height: 1.8em;
  padding: 0 8px;
}
.change-language {
  display: inline;
  margin: 8px;
}
img {
  border-radius: 50%;
  padding: 0 8px;
  cursor: pointer;
  margin-bottom: 3px;
}
</style>

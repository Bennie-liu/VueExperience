<template>
  <div class="header">
    <i
      class="header-left"
      :class="foldIcon ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="toggleClick"
    ></i>
    <div class="header-right">
      <div class="full-screen" @click="screenFull">
        <i class="el-icon-full-screen"></i>
      </div>
      <span>
        <img src="http://file.learningwhy.today/yhy.png" alt="图片丢失咯" />
      </span>
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
      screenFull.toggle();
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
  font-size: 26px;
  padding-top: 13px;
  padding-left: 10px;
  cursor: pointer;
  color: #5c6b77;
}
i:hover {
  color: #048ac9;
}
.header-right {
  float: right;
  font-size: 26px;
  padding-top: 8px;
  color: #5c6b77;
  position: relative;
  width: 90px;
}
.full-screen {
  float: left;
  cursor: pointer;
}
img {
  width: 35%;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 2px;
  cursor: pointer;
}
</style>

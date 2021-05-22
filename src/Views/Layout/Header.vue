<template>
  <div class="header">
    <i class="header-left el-icon-s-fold"></i>
    <div class="header-right">
      <div class="full-screen">
        <i class="el-icon-full-screen"></i>
      </div>
      <span class="photo">
        <img
          src="https://i.gtimg.cn/club/item/face/img/2/15922_100.gif"
          alt=""
        />
      </span>
    </div>
  </div>
  <div class="tager"></div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    "Header";
  },
});
</script>
<style  scoped>
.header {
  width: 100%;
  /* background-color: #07868f; */
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
/* .photo {
  float: right;
} */
.photo > img {
  width: 35%;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 2px;
  cursor: pointer;
}
</style>

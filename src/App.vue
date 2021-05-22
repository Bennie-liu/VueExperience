<template>
  <div class="app-container">
    <Asider />
    <div class="main-container">
      <Header />
      <div class="app-main">
        <div class="content">
          <Mainer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Asider from "./Views/Layout/Asider.vue";
import Header from "./Views/Layout/Header.vue";
import Mainer from "./Views/Layout/Mainer.vue";

export default {
  name: "App",
  components: {
    Asider,
    Header,
    Mainer,
  },
};
</script>

<style>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.main-container {
  flex-grow: 1;
}
.app-main {
  height: calc(100vh - 80px);
  overflow: auto;
  background-color: #f4f5f5;
  width: 100%;
}
.content {
  font-size: 30px;
  height: calc(100vh - 100px);
  /* 86 = header 86 + margin 20 */
  margin: 10px;
  overflow: auto;
}
/* 滚动条样式 */
.content::-webkit-scrollbar {
  width: 6px;
}
.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
.content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0 0 0 / 1%);
}
</style>

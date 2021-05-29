<template>
  <div class="detail">
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    "Mainer";
  },
});
</script>
<style scoped>
.detail {
  background-color: rgb(255, 255, 255);
  font-size: 24px;
  color: #6e6b7b;
  min-height: 100%;
}
</style>

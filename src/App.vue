<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <p>{{ x }}</p>
    <p>{{ mouseX }}-{{ mouseY }}</p>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import useMousePosition from "./useMouse";

export default defineComponent({
  setup() {
    const { x: mouseX, y: mouseY } = useMousePosition();
    onMounted(() => {
      console.log(1);
    });
    const x = ref(1)
    return {
      x,
      mouseX,
      mouseY,
    }
  },
  data() {
    return {
      msg: "1",
    };
  },
  updated() {
    console.log("updated");
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.x = 2;
    }, 2000);
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

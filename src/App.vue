<script>
import Menu from './components/Menu/Menu.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: "App",
  components: {
    Menu,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Menu />
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>

</template>

<style scoped src="./App.scss" />

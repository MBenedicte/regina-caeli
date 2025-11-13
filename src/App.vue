<script>
import AppMenu from "@/components/Menu/Menu.vue";
import FooterSection from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    AppMenu,
    FooterSection,
  },
};
</script>

<template>
  <div class="app-shell">
    <AppMenu />
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      <FooterSection />
    </footer>
  </div>
</template>

<style scoped src="./App.scss" />
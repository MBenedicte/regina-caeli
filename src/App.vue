<script setup>
import Menu from './components/Menu/Menu.vue';
import Carousel from './components/Carousel/Carousel.vue';
import About from './components/About/About.vue';
import ContactUs from './components/Contact/Contact.vue';
import Mission from './components/Mission/Mission.vue';
import Footer from './components/Footer/Footer.vue';


</script>

<template>
  <div>
    <Menu />
    <Carousel :autoplayMs="6000" />
    <About />
    <Mission />
    <ContactUs />
    <Footer />
  </div>

</template>

<style scoped></style>

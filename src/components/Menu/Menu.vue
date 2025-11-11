<template>
    <div class="app-menu" :class="{ 'is-open': open }">
        <div class="menu-wrap">
            <a class="brand" href="#home" @click="scrollTo('#home')">
                <i class="ri-community-line"></i>
                <span>Regina Caeli</span>
            </a>

            <!-- Desktop links -->
            <nav class="links">
                <a href="#home" @click="scrollTo('#home')">Hem</a>
                <a href="#about" @click="scrollTo('#about')">Om Oss</a>
                <a href="#contact" @click="scrollTo('#contact')">Kontakta Oss</a>
                <!-- <router-link to="/facebook" @click="close">Facebook</router-link> -->
            </nav>

            <!-- Mobile toggle -->
            <button class="menu-toggle" @click="open = !open">
                <i v-if="!open" class="ri-menu-line"></i>
                <i v-else class="ri-close-line"></i>
            </button>
        </div>

        <!-- Mobile drawer -->
        <nav class="drawer" v-show="open">
            <a href="#home" @click="scrollTo('#home')">
                <i class="ri-home-5-line"></i> Hem
            </a>
            <a href="#about" @click="scrollTo('#about')">
                <i class="ri-information-line"></i> Om Oss
            </a>
            <a href="#contact" @click="scrollTo('#contact')">
                <i class="ri-mail-line"></i> Kontakta Oss
            </a>
        </nav>
    </div>
</template>

<script src="./Menu.js"></script>
<style lang="scss" src="./Menu.scss" scoped></style>

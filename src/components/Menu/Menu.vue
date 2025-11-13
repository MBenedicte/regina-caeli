<!-- src/components/Menu/Menu.vue -->
<template>
    <div class="app-menu" :class="{ 'is-open': open }">
        <div class="menu-wrap">
            <!-- Brand with logo -->
            <a href="#home" class="brand" @click.prevent="scrollTo('#home')">
                <i class="ri-community-line"></i>
                <span>Regina Caeli</span>
            </a>

            <!-- Desktop links -->
            <nav class="links" aria-label="Huvudmeny">
                <a href="#home" @click.prevent="scrollTo('#home')">Hem</a>
                <a href="#about" @click.prevent="scrollTo('#about')">Om Oss</a>
                <a href="#contact" @click.prevent="scrollTo('#contact')">Kontakta Oss</a>
            </nav>

            <!-- Mobile toggle -->
            <button class="menu-toggle" type="button" @click="toggleMenu" :aria-expanded="open.toString()"
                aria-controls="mobile-menu" aria-label="Växla huvudmeny">
                <i v-if="!open" class="ri-menu-line"></i>
                <i v-else class="ri-close-line"></i>
            </button>
        </div>

        <!-- Mobile drawer -->
        <nav id="mobile-menu" class="drawer" v-show="open" aria-label="Mobilmeny">
            <a href="#home" @click.prevent="scrollTo('#home')">
                <i class="ri-home-5-line"></i>
                <span>Hem</span>
            </a>
            <a href="#about" @click.prevent="scrollTo('#about')">
                <i class="ri-information-line"></i>
                <span>Om Oss</span>
            </a>
            <a href="#contact" @click.prevent="scrollTo('#contact')">
                <i class="ri-mail-line"></i>
                <span>Kontakta Oss</span>
            </a>
        </nav>
    </div>
</template>

<script src="./Menu.js"></script>
<style lang="scss" src="./Menu.scss" scoped></style>

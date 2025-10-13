<template>
    <header class="app-menu" :class="{ 'is-open': open }" role="banner">
        <div class="menu-wrap" role="navigation" aria-label="Main">
            <a class="brand" href="#home" @click="close" aria-label="Go to Home">
                <i class="ri-community-line" aria-hidden="true"></i>
                <span>Regina Caeli</span>
            </a>

            <!-- Desktop links -->
            <nav class="links" aria-label="Primary">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact Us</a>
            </nav>

            <!-- Mobile toggle -->
            <button class="menu-toggle" :aria-expanded="open ? 'true' : 'false'" aria-controls="mobile-drawer"
                @click="open = !open" title="Toggle menu">
                <i v-if="!open" class="ri-menu-line" aria-hidden="true"></i>
                <i v-else class="ri-close-line" aria-hidden="true"></i>
                <span class="sr-only">Menu</span>
            </button>
        </div>

        <!-- Mobile drawer -->
        <nav id="mobile-drawer" class="drawer" aria-label="Mobile" v-show="open">
            <a href="#home" @click="close"><i class="ri-home-5-line"></i> Home</a>
            <a href="#about" @click="close"><i class="ri-information-line"></i> About Us</a>
            <a href="#contact" @click="close"><i class="ri-mail-line"></i> Contact Us</a>
        </nav>
    </header>
</template>

<script src="./Menu.js"></script>
<style lang="scss" src="./Menu.scss" scoped></style>

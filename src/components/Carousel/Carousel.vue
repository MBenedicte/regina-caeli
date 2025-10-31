<template>
    <section id="home" class="app-carousel" role="region" aria-label="Featured photos">
        <!-- Slides -->
        <div class="track" :style="trackStyle">
            <figure v-for="(src, key) in images" :key="key" class="slide" :aria-hidden="current !== key"
                :tabindex="current === key ? 0 : -1">
                <img :src="src" alt="Carousel image" />
            </figure>
        </div>

        <!-- Caption Overlay -->
        <div class="caption">
            <h2 class="caption-text">A place to grow in Faith and community</h2>
            <button class="btn" @click="openModal">
                <i class="ri-calendar-line"></i> Check our calendar
            </button>
        </div>

        <!-- Controls -->
        <button class="ctrl prev" @click="prev" aria-label="Previous slide">
            <i class="ri-arrow-left-s-line" aria-hidden="true"></i>
        </button>
        <button class="ctrl next" @click="next" aria-label="Next slide">
            <i class="ri-arrow-right-s-line" aria-hidden="true"></i>
        </button>

        <!-- Dots -->
        <div class="dots" role="tablist" aria-label="Slide selector">
            <button v-for="(src, i) in images" :key="i" class="dot" :class="{ active: current === i }" @click="go(i)"
                :aria-selected="current === i ? 'true' : 'false'" role="tab"></button>
        </div>

        <!-- Modal -->
        <div class="modal" v-if="showModal" @click.self="closeModal">
            <div class="modal-content">
                <header class="modal-header">
                    <h3><i class="ri-calendar-2-line"></i> Church Events</h3>
                    <button class="close-btn" @click="closeModal" aria-label="Close">
                        <i class="ri-close-line"></i>
                    </button>
                </header>

                <div class="calendar-wrap">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=burundiskakatolskamission@gmail.com&mode=WEEK&showPrint=0&showTabs=0&showTz=0&wkst=2&bgcolor=%23ffffff"
                        class="calendar-frame" frameborder="0" scrolling="no" allowfullscreen
                        aria-label="Calendar of events"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="./Carousel.js"></script>
<style lang="scss" src="./Carousel.scss" scoped></style>

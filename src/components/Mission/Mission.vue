<template>
    <section id="mission" class="mission-section" aria-labelledby="mission-title">
        <div class="container">
            <div class="mission-content">
                <!-- Layered photo cards -->
                <div class="photos">
                    <div v-for="(img, i) in orderedImages" :key="img.src" class="photo" :class="'photo-' + (i + 1)">
                        <img :src="img.src" :alt="img.alt" />
                    </div>
                </div>

                <!-- Text -->
                <div class="text">
                    <div class="section-header">
                        <h2 id="mission-title">Vårt uppdrag</h2>
                        <div class="divider"></div>
                    </div>
                    <p>
                        Den katolska visionen för mänskligheten är att skapa Guds avbild i troende människor, samtidigt
                        som man försöker följa och omsätta Guds ord i praktiken eftersom Gud är kärlek.
                        Burundiska och rwandiska missionen tillhör Stockholms katolska och omfattar katolska människor
                        som pratar kirundi och kinyarwanda språk i hela Sverige.
                    </p>

                    <p>
                       Burundiska och rwandiska katolska mission förklarades 2020-06-01 av Kardinal Anders Arborelius och har sitt säte i Sala
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>
<script src="./Mission.js" />
<style lang="scss" src="./Mission.scss" scoped></style>
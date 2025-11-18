<template>
    <section id="about" class="about-section">
        <div class="container">

            <!-- Section Header -->
            <div class="section-header">
                <i class="ri-church-line header-icon"></i>
                <h2>Om oss</h2>
                <div class="divider"></div>
            </div>

            <!-- Intro Block -->
            <div class="about-intro">
                <div class="intro-content">
                    <div class="text">
                        <p>
                            Burundiska och rwandiska mission är en skola där den katolska tron och gemenskap förmedlas
                            på båda <em>kirundi</em> och <em>kinyarwanda</em> språk. Syftet är att älska och vara en
                            missionär i de olika katolska församlingar de troende bor och även i världen.
                        </p>

                        <p>
                            Det katolska stiftet är vår hem, vår moder, det är den som föder och oss för andra gången
                            i vatten och den Helige ande, i dopet. Det är den samma som förbereder och ger oss möjlighet
                            till den heliga kommunionen med vår Herre Jesus Kristus, vilket förvandlar oss
                            till en kärleksfull församling tack vare den heliga kommunionen.
                        </p>

                        <p>
                            Samma katolska församling skickar oss som missionärer genom konfirmation för att kalla alla
                            till denna underbara gemenskap. Vare sig om man vill ägna sitt liv åt Gud eller bilda
                            familj i äktenskap, så får vi välsignelsen av samma katolska församling. Den katolska
                            församlingen är med oss under hela resgång av vårt liv, även vid slutet (isiga ry’abagwaye)
                            eller vid begravning. Detta är vår tron och vår mission är att lära ut alla katolska
                            burundier och rwandier i hela Sverige.

                        </p>

                        <p>
                            Burundiska och rwandiska katolska mission har sitt fäste i Sala, men inkluderar alla
                            katoliker i hela Sverige. Från Kiruna till Göteborg, välkomnas att troende som känner sig
                            manade att dela och sprida Gudsbudskap och stärka vår tron under ledarskap av vår rektor
                            fader Ignace Nkurunziza och tjänstgöring av en diakon, Godefroid Ndayikengurukiye.
                        </p>
                    </div>
                </div>

                <div class="about-visual">
                    <img src="@/assets/images/img4.jpg" alt="Mission community image">
                    <div class="overlay"></div>
                </div>
            </div>

            <!-- Activities Title -->
            <h3 class="activities-title">Bön och Andliga Aktiviteter</h3>

            <!-- Cards -->
            <div class="cards">
                <article class="card">
                    <h3><i class="ri-music-2-line"></i> Lovsångsbön</h3>
                    <p>
                        Varje onsdag hålls lovsångsbön där katoliker från hela Sverige deltar.
                        En kväll med lovprisning och bibelord.
                    </p>
                </article>

                <article class="card">
                    <h3><i class="ri-parent-line"></i> Helige Andes skola</h3>
                    <p>
                        Varje första tisdag i månaden möts "Ecole du St Esprit” för bön och
                        bibelläsning.
                    </p>
                </article>

                <article class="card">
                    <h3><i class="ri-team-line"></i> Jesus barmhärtighetsgruppen</h3>
                    <p>
                        Första fredagen i varje månad samlas gruppen för bön och bibelläsning.
                    </p>
                </article>
            </div>

            <!-- Hidden Extra Cards -->
            <transition name="fade">
                <div v-if="showMore" class="extra-cards">

                    <article class="card">
                        <h3><i class="ri-hand-heart-line"></i> Marias bebådelsegruppen</h3>
                        <p>
                            Första lördagen i månaden samlas gruppen för gemensam rosenkransbön.
                        </p>
                    </article>

                    <article class="card">
                        <h3><i class="ri-cross-line"></i> Mässor och Tillbedjan</h3>
                        <p>
                            Här följer samlingen av mässor runt Sverige på kirundi och svenska.
                            Ordningen varierar mellan Sala, Västerås, Uppsala, Örebro, Märsta
                            och Enköping, enligt missionens kalender.
                        </p>
                    </article>

                </div>
            </transition>

            <!-- Toggle Button -->
            <div class="show-toggle" @click="toggleMore">
                <i :class="showMore ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"></i>
                <span>{{ showMore ? 'Visa färre aktiviteter' : 'Visa fler aktiviteter' }}</span>
            </div>

        </div>
    </section>
</template>

<script src="./About.js"></script>
<style lang="scss" src="./About.scss" scoped></style>
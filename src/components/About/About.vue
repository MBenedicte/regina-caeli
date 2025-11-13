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
                            Burundiska och Rwandiska Mission är en levande skola där den katolska
                            tron och gemenskapen förmedlas på både
                            <em>kirundi</em> och <em>kinyarwanda</em>. Vi är kallade att älska och
                            tjäna som missionärer i de katolska församlingar där troende bor –
                            och i världen.
                        </p>

                        <p>
                            Det katolska stiftet är vårt hem och vår moder. Där föds vi på nytt
                            genom vatten och den Helige Ande i dopet. Där får vi den heliga
                            kommunionen med vår Herre Jesus Kristus – en nåd som förvandlar oss
                            till en kärleksfull församling.
                        </p>

                        <p>
                            Genom konfirmationen sänds vi ut som missionärer, kallade att dela
                            Guds kärlek och bjuda in alla till gemenskapen. Oavsett om vi kallas
                            till ett liv helt ägnat åt Gud eller till att bilda familj, följer
                            den katolska församlingen oss genom hela livet.
                        </p>

                        <p>
                            Burundiska och Rwandiska Katolska Mission har sitt säte i Sala, men
                            omfattar troende i hela Sverige. Alla katoliker som känner sig
                            kallade att växa i tron är välkomna, under ledning av vår rektor
                            Fader Ignace N. och diakon Godefroid N.
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

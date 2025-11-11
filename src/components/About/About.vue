<template>
    <section id="about" class="about-highlights">
        <div class="container">
            <!-- 🌿 Elegant Section Title -->
            <div class="section-header">
                <i class="ri-church-line header-icon"></i>
                <h2>Om oss</h2>
                <div class="divider"></div>
            </div>

            <!-- 🌸 Creative About Block -->
            <div class="about-intro">
                <div class="intro-content">
                    <!-- <div class="icon-circle">
                        <i class="ri-community-line"></i>

                    </div>
                    <h3> Bön och Andliga Aktiviteter</h3> -->
                    <div class="text">

                        <p>
                            <strong>Burundiska och Rwandiska Mission</strong> är en levande skola där den katolska tron
                            och
                            gemenskapen förmedlas på både <em>kirundi</em> och <em>kinyarwanda</em> språk. Syftet är att
                            älska
                            och tjäna som missionärer i de katolska församlingar där de troende bor – och i världen.
                        </p>
                        <p>
                            Det katolska stiftet är vårt hem och vår moder. Det är där vi blir födda på nytt genom
                            vatten
                            och den Helige Ande i dopet. Där får vi den heliga kommunionen med vår Herre Jesus Kristus –
                            en nåd
                            som förvandlar oss till en kärleksfull församling.
                        </p>
                        <p>
                            Genom konfirmationen sänds vi ut som missionärer, kallade att bjuda in alla till denna
                            underbara
                            gemenskap. Oavsett om vi kallas till ett liv helt ägnat åt Gud eller till att bilda familj,
                            välsignas
                            vi av samma katolska församling som följer oss genom livets hela resa – från början till
                            slut.
                        </p>
                        <p>
                            <strong>Burundiska och Rwandiska Katolska Mission</strong> har sitt säte i
                            <strong>Sala</strong>, men omfattar troende i hela Sverige – från Kiruna till Göteborg. Alla
                            katoliker som känner sig kallade att dela och sprida Guds ord är välkomna att växa i tron
                            under
                            ledning av vår rektor <strong>Fader Ignace N.</strong> och <strong>diakon Godefroid
                                N.</strong>
                        </p>
                    </div>
                </div>
                <div class="about-visual">
                    <img src="@/assets/images/img4.jpg" alt="Church community worshipping" />
                    <div class="overlay"></div>
                </div>
            </div>


            <h3> Bön och Andliga Aktiviteter</h3>
            <div class="cards">

                <article class="card">
                    <h3><i class="ri-music-2-line"></i> Lovsångsbön</h3>
                    <p class="muted">
                        Varje onsdagar finns lovsångsbön där alla katoliker från hela Sverige, även från
                        andra länder, deltar. Det är lovprisning och bibelord predikan.
                    </p>
                </article>

                <article class="card">
                    <h3><i class="ri-parent-line"></i> Helige Andes skola</h3>
                    <p class="muted">
                        Varje första tisdag i månaden ses "Ecole du St Esprit” (Helige Andes skola) för en
                        bön och bibelläsning.
                    </p>
                </article>

                <article class="card">
                    <h3><i class="ri-team-line"></i> Jesus barmhärtighetsgruppen</h3>
                    <p class="muted">
                        Varje första fredag i månaden ses de som är i Jesus barmhärtighets gruppen för bön
                        och bibelläsning.
                    </p>
                </article>
            </div>

            <!-- Hidden Cards -->
            <transition name="fade">
                <div v-if="showMore" class="extra-cards">
                    <article class="card">
                        <h3><i class="ri-hand-heart-line"></i> Marias bebådelsegruppen</h3>
                        <p class="muted">
                            Varje första lördag i månaden ses de som är i Marias bebådelse gruppen för en
                            rosenkransbön tillsammans.
                        </p>
                    </article>

                    <article class="card">
                        <h3><i class="ri-cross-line"></i> Mässan och Sakramental Tillbedjan</h3>
                        <p class="muted">
                            <strong>Varje söndag kl. 16.00</strong> firas den helige mässan i Sala, som sänds
                            live i hela Sverige för katoliker som inte har närhet till mässan.
                            <br />
                            <strong>Varje torsdag</strong> firas mässan som följs av sakramental tillbedjan
                            under hela dagen i Sala.
                            <br />
                            <strong>Varje första lördag i månaden</strong> firas mässan på Kirundi i Västerås
                            på Vår fru församling.
                            <br />
                            <strong>Varje andra lördag i månaden</strong> firas mässan på Kirundi i Uppsala på
                            S:t Lars församling.
                            <br />
                            <strong>Varje tredje lördagen i månaden</strong> firas mässan på kirundi i Örebro,
                            St.Eskils församling.
                            <br />
                            <strong>Varannan fjärde lördag i månaden</strong> firas mässan på kirundi i Märsta,
                            på Sankt Franciskus församling.
                            <br />
                            <strong>Varannan fjärde lördag i månaden</strong> firas mässan på kirundi i
                            Enköping på Sankt Ilian.
                        </p>
                    </article>
                </div>
            </transition>

            <!-- Toggle Button -->
            <div class="show-toggle" @click="toggleMore">
                <i :class="showMore ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'"></i>
                <span>{{ showMore ? 'Visa mindre aktiviteter' : 'Visa fler aktiviteter' }}</span>
            </div>
        </div>
    </section>
</template>

<script src="./About.js" />

<style lang="scss" src="./About.scss" scoped></style>

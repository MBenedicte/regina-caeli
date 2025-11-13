<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div class="container">

      <!-- Header -->
      <div class="section-header">
        <h2 id="contact-title">Kontakta oss</h2>
        <div class="divider"></div>
      </div>

      <!-- Contact + Visit -->
      <div class="contact-grid">
        <!-- CONTACT FORM -->
        <form class="card contact-form" action="https://formspree.io/f/xdkpqgeb" @submit.prevent="handleSubmit"
          ref="contactForm" novalidate>
          <h3><i class="ri-mail-line"></i> Kontakta oss</h3>

          <label for="name">Namn</label>
          <input id="name" v-model.trim="form.name" name="name" required />

          <label for="email">E-post</label>
          <input id="email" v-model.trim="form.email" type="email" name="email" required />

          <label for="message">Meddelande</label>
          <textarea id="message" v-model.trim="form.message" name="message" required
            placeholder="Vad kan vi hjälpa dig med?"></textarea>

          <div class="actions">
            <button class="btn btn--primary" type="submit">
              <i class="ri-send-plane-2-line"></i>
              Skicka meddelande
            </button>

            <p v-if="sent" class="sent">
              <i class="ri-check-line"></i> Tack! Vi återkommer snart.
            </p>
          </div>
        </form>

        <!-- VISIT US -->
        <article class="card visit-card">
          <h3><i class="ri-map-pin-line"></i> Besök oss</h3>

          <address class="addr">
            Regina Caeli Catholic Mission <br />
            Hyttgatan 5c <br />
            Sala, Sweden
          </address>


          <div class="map-wrap">
            <iframe class="map-frame" :src="mapSrc"></iframe>
          </div>
          <div class="map-note">
            <i class="ri-external-link-line"></i>
            Öppna kartan för vägledning.
          </div>
        </article>
      </div>

      <!-- CLERGY -->
      <article class="card clergy-card">
        <h3 class="personal-title">Andlig Vägledning & Tjänare i Missionen</h3>

        <p class="intro">
          Vi är välsignade med hängivna tjänare som leder missionen med kärlek
          och ödmjukhet. Du är varmt välkommen att söka andlig vägledning.
        </p>

        <div class="clergy-grid">
          <div class="clergy-member">
            <h4>Fader Ignace Nkurunziza</h4>
            <p>Rektor</p>
            <address>
              Hyttgatan 5c <br />
              733 31 Sala <br />
              <span class="muted">Mobiltel:</span> 076-240 89 95 <br />
              <span class="muted">E-post:</span>
              <a href="mailto:ignacenku@yahoo.fr">ignacenku@yahoo.fr</a>
            </address>
          </div>

          <div class="clergy-member">
            <h4>Diakon Godefroid Ndayikengurukiye</h4>
            <p>Diakon</p>
            <address>
              Enstigen 5 <br />
              745 71 Enköping <br />
              <span class="muted">E-post:</span>
              <a href="mailto:godefroid.ndayikengurukiye@katolskakyrkan.se">
                godefroid.ndayikengurukiye@katolskakyrkan.se
              </a>
            </address>
          </div>
        </div>
      </article>

    </div>
  </section>
</template>

<script src="./Contact.js"></script>

<style lang="scss" src="./Contact.scss" scoped></style>
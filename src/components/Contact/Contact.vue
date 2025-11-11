<template>
  <section id="contact" class="connect" aria-labelledby="connect-title">
    <div class="container">
      <h2 id="connect-title">
        <i class="ri-hand-heart-line" aria-hidden="true"></i> Kontakta oss
      </h2>

      <!-- Contact + Visit Grid -->
      <div class="grid">
        <form class="card contact" action="https://formspree.io/f/xdkpqgeb" @submit.prevent="handleSubmit" novalidate>
          <h3 class="card-title"><i class="ri-mail-line"></i>Kontakta oss </h3>

          <label for="name">Name</label>
          <input id="name" v-model.trim="form.name" required autocomplete="name" />

          <label for="email">Email</label>
          <input id="email" v-model.trim="form.email" type="email" required autocomplete="email" />

          <label for="message">Message</label>
          <textarea id="message" v-model.trim="form.message" required placeholder="How can we serve you?"></textarea>

          <div class="actions">
            <button class="btn" type="submit">
              <i class="ri-send-plane-2-line" aria-hidden="true"></i> Send Message
            </button>
            <p v-if="sent" class="sent">
              <i class="ri-check-line"></i> Thanks! We’ll get back to you.
            </p>
          </div>
        </form>

        <article class="card visit">
          <h3 class="card-title"><i class="ri-map-pin-line"></i> Besök oss</h3>
          <address class="addr">
            <strong>Regina Caeli Catholic Mission</strong><br />
            Hyttgatan 5c<br />
            Sala, Sweden<br />

          </address>

          <div class="map-wrap">
            <iframe class="map-frame" :src="mapSrc" style="border:0" frameborder="0" allowfullscreen
              aria-label="Map to our church"></iframe>
          </div>

          <div class="map-note muted">
            <i class="ri-external-link-line"></i>
            For directions, open the map and use your Maps app.
          </div>
        </article>
      </div>

      <!-- Full-width subsection: Clergy Contacts -->
      <article class="card clergy full-width">
        <h3 class="card-title"><i class="ri-user-heart-line"></i> </h3>
        <p class="intro">
          Vi är välsignade att få vägledning av hängivna trons tjänare som leder vårt uppdrag med medkänsla och
          ödmjukhet. Du uppmuntras att söka andlig vägledning eller församlingsfrågor.
        </p>

        <div class="clergy-grid">
          <div class="clergy-member">
            <h4>Fader Ignace Nkurunziza</h4>
            <p><strong>Rektor</strong></p>
            <address>
              Hyttgatan 5c<br />
              733 31 Sala<br />
              <span class="muted">Mobiltel:</span> 076-240 89 95<br />
              <span class="muted">E-post:</span>
              <a href="mailto:ignacenku@yahoo.fr">ignacenku@yahoo.fr</a>
            </address>
          </div>

          <div class="clergy-member">
            <h4>Diakon Godefroid Ndayikengurukiye</h4>
            <p><strong>Diakon</strong></p>
            <address>
              Enstigen 5<br />
              745 71 Enköping<br />
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

<script src="./Contact.js" />

<style lang="scss" src="./Contact.scss" scoped></style>

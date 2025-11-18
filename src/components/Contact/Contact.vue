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

          <!-- reCAPTCHA -->
          <input type="hidden" name="g-recaptcha-response" :value="recaptchaToken" />

          <div class="actions">
            <button class="btn btn--primary" type="submit" :disabled="loading">
              <i class="ri-send-plane-2-line"></i>
              <span v-if="!loading">Skicka meddelande</span>
              <span v-else>Skickar...</span>
            </button>

            <p v-if="sent" class="sent">
              <i class="ri-check-line"></i> Tack! Vi återkommer snart.
            </p>

            <p v-if="error" class="error">
              <i class="ri-error-warning-line"></i> Något gick fel. Försök igen.
            </p>
          </div>
        </form>

        <!-- VISIT US -->
        <article class="card visit-card">
          <h3><i class="ri-map-pin-line"></i> Besök oss</h3>

          <address class="addr">
            Regina Caeli Catholic Mission <br />
            Hyttgatan 5A<br />
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
          <div class="clergy-member" v-for="(person, index) in clergy" :key="index">
            <h4>{{ person.name }}</h4>

            <address>
              <p class="row" v-if="person.address">
                <i class="ri-map-pin-line"></i>
                {{ person.address }}
              </p>

              <p class="row" v-if="person.phone">
                <i class="ri-phone-line"></i>
                {{ person.phone }}
              </p>

              <p class="row" v-if="person.email">
                <i class="ri-mail-line"></i>
                <a :href="`mailto:${person.email}`">{{ person.email }}</a>
              </p>
            </address>
          </div>
        </div>
      </article>

    </div>
  </section>
</template>

<script src="./Contact.js"></script>

<style lang="scss" src="./Contact.scss" scoped></style>

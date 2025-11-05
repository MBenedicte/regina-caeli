<template>
  <section id="contact" class="connect" aria-labelledby="connect-title">
    <div class="container">
      <h2 id="connect-title">
        <i class="ri-hand-heart-line" aria-hidden="true"></i> Get in touch & Visit
      </h2>

      <div class="grid">
        <form class="card contact" action="https://formspree.io/f/xdkpqgeb" @submit.prevent="handleSubmit" novalidate>
          <h3 class="card-title"><i class="ri-mail-line"></i> Contact Us</h3>

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
          <h3 class="card-title"><i class="ri-map-pin-line"></i>Visit Us</h3>




          <address class="addr">
            <strong>Regina Caeli Catholic Community</strong><br />
            123 Hope Street<br />
            Your City, Sweden<br />
            <span class="muted">Sunday Worship: <b>10:00</b> &middot; Prayer: <b>Wed 19:00</b></span>
          </address>

          <div class="map-wrap">
            <iframe class="map-frame" :src="mapSrc" style="border:0" frameborder="0" allowfullscreen
              aria-label="Map to our church"></iframe>
          </div>

          <!-- Optional note for users about directions -->
          <div class="map-note muted">
            <i class="ri-external-link-line"></i>
            For directions, open the map and use your Maps app.
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script src="./Contact.js" />

<style lang="scss" src="./Contact.scss" scoped></style>

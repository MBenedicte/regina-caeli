// src/components/Menu/Menu.js
export default {
  name: "AppMenu",
  data() {
    return { open: false };
  },
  methods: {
    toggleMenu() {
      this.open = !this.open;
    },
    scrollTo(hash) {
      this.open = false;

      if (this.$route && this.$route.path !== "/") {
        this.$router.push({ path: "/", hash }).then(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};

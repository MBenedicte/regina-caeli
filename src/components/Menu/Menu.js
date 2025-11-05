export default {
  name: "AppMenu",
  data() {
    return { open: false };
  },
  methods: {
    close() {
      this.open = false;
    },
    scrollTo(hash) {
      this.close();

      // navigate to home first if we’re on another route
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/", hash }).then(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        });
      } else {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};

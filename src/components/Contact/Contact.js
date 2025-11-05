export default {
  name: "ContactUs",
  data() {
    return {
      submitted: false,
      sent: false,
      form: { name: "", email: "", message: "" },
      mapSrc:
        "https://www.google.com/maps/d/u/0/embed?mid=1_4xtVM5j2MYG5tZlne-iCZmEB32osyQ&ehbc=2E312F&ll=59.92136149999999%2C16.612014100000003&z=17",
    };
  },
  methods: {
    async handleSubmit(e) {
      // Minimal front-end validation
      if (!this.form.name || !this.form.email || !this.form.message) return;

      const response = await fetch("https://formspree.io/f/xdkpqgeb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) this.submitted = true;
      // For now, just show a success message & clear the form
      this.sent = true;
      setTimeout(() => (this.sent = false), 4000);
      this.form = { name: "", email: "", message: "" };
    },
  },
};

export default {
  name: "ContactUs",

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },

      loading: false,
      sent: false,
      error: false,
      recaptchaToken: "",
      siteKey: "6Leg5RAsAAAAANqL-kTB3c-TfzQ7d5vMYatrDD7z",
      mapSrc:
        "https://www.google.com/maps/d/embed?mid=1Byt88A8FJ6g3TF6rz65IhM55ZGfVjzY&ehbc=2E312F",
      clergy: [
        {
          name: "Rektor abbé Ignace Nkurunziza",
          address: "Hyttgatan 5 C, lgh 1304, 733 31 Sala",
          phone: "076-240 89 95",
          email: "ignacenku@yahoo.fr",
        },
        {
          name: "Diakon Godefroid Ndayikengurukiye",
          address: "Enstigen 5, 745 71 Enköping",
          phone: null,
          email: "godefroid.ndayikengurukiye@katolskakyrkan.se",
        },
        {
          name: "f. Mathias Karema",
          address: null,
          phone: "076-558 82 84",
          email: "karemat8@gmail.com",
        },
        {
          name: "f. Thérençe Baragafise",
          address: null,
          phone: "070-025 48 90",
          email: "barater901@gmail.com",
        },
      ],
    };
  },

  methods: {
    async handleSubmit() {
      if (!this.form.name || !this.form.email || !this.form.message) return;

      this.loading = true;
      this.error = false;

      try {
        const token = await grecaptcha.execute(this.siteKey, { action: "submit" });
        this.recaptchaToken = token;

        const formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("email", this.form.email);
        formData.append("message", this.form.message);
        formData.append("g-recaptcha-response", token);

        const response = await fetch("https://formspree.io/f/xdkpqgeb", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (!response.ok) throw new Error();

        this.sent = true;
        this.form = { name: "", email: "", message: "" };
        setTimeout(() => (this.sent = false), 4000);
      } catch (err) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};

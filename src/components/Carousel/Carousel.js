export default {
  name: "Carousel",

  data() {
    return {
      images: [
        new URL("@/assets/images/img1.jpg", import.meta.url).href,
        new URL("@/assets/images/img2.jpg", import.meta.url).href,
        new URL("@/assets/images/img3.jpg", import.meta.url).href,
      ],
      current: 0,
      showModal: false,
    };
  },

  computed: {
    count() {
      return this.images.length;
    },
    trackStyle() {
      return { transform: `translateX(-${this.current * 100}%)` };
    },
  },

  methods: {
    next() {
      this.current = (this.current + 1) % this.count;
    },
    prev() {
      this.current = (this.current - 1 + this.count) % this.count;
    },
    go(i) {
      this.current = i;
    },
    openModal() {
      this.showModal = true;
      document.body.style.overflow = "hidden"; // disable scroll
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = ""; // restore scroll
    },
  },
};

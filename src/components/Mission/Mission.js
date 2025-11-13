export default {
  name: "Mission",

  data() {
    return {
      images: [
        {
          src: new URL("@/assets/images/mission_1.jpg", import.meta.url).href,
          alt: "Community gathering",
        },
        {
          src: new URL("@/assets/images/mission_2.jpg", import.meta.url).href,
          alt: "Worship moment",
        },
      ],
      activeIndex: 0,
    };
  },

  computed: {
    orderedImages() {
      return this.images.slice(this.activeIndex).concat(this.images.slice(0, this.activeIndex));
    },
  },

  methods: {
    bringToFront(i) {
      this.activeIndex = (this.activeIndex + i) % this.images.length;
    },
  },
};

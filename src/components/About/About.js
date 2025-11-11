export default {
  name: "About",

  data: function () {
    return {
      showMore: false,
    };
  },

  methods: {
    toggleMore() {
      this.showMore = !this.showMore;
    },
  },

  mounted: async function () {},
};

<template>
  <div class="home-page">
    <Menu
      active-name="1-2"
      :open-names="['1', '2', '3']"
      on-select="handleSelect"
    ></Menu>
  </div>
  <!-- <div class="home-page">1234</div> -->
</template>

<script>
export default {
  name: "home-page",
  mixins: [],
  directives: {},
  components: {},
  props: {
    propData: {
      type: Object
    }
  },
  data() {
    return {
      sthData: {}
    };
  },
  computed: {},
  watch: {},
  created() {},
  beforeDestroy() {},
  methods: {
    handleSelect() {}
  }
};
</script>

<template>
  <div class="container">
    <img v-bind:src="imgSource" />
    <div class="text-container">
      <h2 class="about-heading" :style="{ color: color }">Om oss</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed augue lacus
        viverra vitae congue eu consequat ac. Molestie at elementum eu facilisis
        sed odio morbi. Et molestie ac feugiat sed lectus vestibulum mattis. Ut
        enim blandit volutpat maecenas. Vulputate dignissim suspendisse in est
        ante. Amet dictum sit amet justo. Nunc mi ipsum faucibus vitae aliquet
        nec ullamcorper sit. Id semper risus in hendrerit gravida rutrum quisque
        non. Tincidunt nunc pulvinar sapien et. Ut ornare lectus sit amet est
        placerat in. Volutpat diam ut venenatis tellus in metus. Et egestas quis
        ipsum suspendisse ultrices gravida. Amet venenatis urna cursus eget nunc
        scelerisque viverra mauris. Amet porttitor eget dolor morbi non arcu
        risus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut
        porttitor.
      </p>
      <h2 class="about-heading" :style="{ color: color }">Lorem ipsum</h2>
      <p>
        Tincidunt tortor aliquam nulla facilisi cras fermentum. Ultrices
        tincidunt arcu non sodales neque sodales ut. Sem et tortor consequat id
        porta nibh venenatis cras sed. Feugiat scelerisque varius morbi enim
        nunc faucibus a pellentesque sit. Luctus accumsan tortor posuere ac ut
        consequat semper viverra nam. Adipiscing elit duis tristique
        sollicitudin nibh sit amet commodo nulla. Convallis posuere morbi leo
        urna. Accumsan tortor posuere ac ut consequat semper viverra nam libero.
        Iaculis at erat pellentesque adipiscing commodo elit at. Suspendisse
        ultrices gravida dictum fusce. Nisi vitae suscipit tellus mauris a diam.
        Varius quam quisque id diam vel quam elementum pulvinar etiam. Sed
        libero enim sed faucibus. Elit at imperdiet dui accumsan sit amet nulla
        facilisi. Sit amet aliquam id diam. Vel turpis nunc eget lorem dolor sed
        viverra. Senectus et netus et malesuada fames ac turpis. Risus viverra
        adipiscing at in tellus integer feugiat scelerisque. Venenatis cras sed
        felis eget velit. A scelerisque purus semper eget duis at tellus. Amet
        venenatis urna cursus eget nunc. Nibh sed pulvinar proin gravida
        hendrerit.
      </p>
    </div>
  </div>
</template>

<script>
//hämtar färgen och uppdaterar den
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["color"]),
  },
  methods: {
    ...mapMutations(["setColor"]),
  },
  data() {
    return { imgSource: "./src/images/hoppande_laxar.jpg" };
  },
  mounted() {
    this.setColor("blue");
  },
};
</script>

<style scoped>
img {
  position: relative;
  max-width: 60vw;
  height: auto;
  background-size: cover;
  overflow-x: hidden;
  margin: 5vh 5vw 1vh 5vw;
}
p {
  margin: 1vh 5vw 1vh 5vw;
}
h2 {
  margin: 1vh 5vw 1vh 5vw;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

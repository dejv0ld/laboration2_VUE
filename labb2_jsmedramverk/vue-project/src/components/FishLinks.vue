<script>
export default {
  async created() {
    const response = await fetch("fiskar.json");
    const result = await response.json();
    this.fishes = result;
  },
  data() {
    return {
      fishes: null,
    };
  },
};
</script>

<template v-if="fishes !== null">
  <nav>
    <ul>
      <li v-for="fish in fishes" :key="fish">
        <router-link :to="`/${fish.name}/${fish.id}`">{{ fish.name }}</router-link>
        <p>({{ fish.latin }})</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
[v-cloak] {
  display: none;
}

li {
  display: flex;
  flex-direction: row;
}

p {
  padding-left: 5px;
}
</style>

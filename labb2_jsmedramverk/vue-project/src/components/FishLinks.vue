<script>
export default {
  //Fetching json file
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

<!--Looping out fish names as links-->
<template v-if="fishes !== null">
  <nav>
    <ul>
      <li v-for="fish in fishes" :key="fish">
        <router-link :to="`/${fish.name}/${fish.id}`">{{
          fish.name
        }}</router-link>
        <p>({{ fish.engelska }})</p>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  padding: 2px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

p {
  margin: 5px 2px 0 2px;
}
a {
  margin: 5px;
}
</style>

<template>
  <div id="translator-div">
    <h3>Översätt fisknamn till latin</h3>
    <input
      id="fish-input"
      v-model="newFishName"
      type="text"
      placeholder="Namn.."
    />
    <button @click="updateFishName">Submit</button>
    <p v-if="showWelcomeMessage">Latin: {{ formattedFishName }}</p>
  </div>
</template>
<script>
const fishTranslations = {
  abborre: "Perca fluviatilis",
  asp: "Aspius aspius",
  brax: "Abramis brama",
  gädda: "Esox lucius",
  gös: "Sander lucioperca",
  harr: "Thymallus thymallus",
  lax: "Salmo salar",
  mört: "Rutilus rutilus",
  öring: "Salmo trutta",
  regnbåge: "Oncorhynchus mykiss",
};
export default {
  data() {
    return {
      newFishName: "",
      originalFishName: "",
      nameUpdated: false,
    };
  },
  props: {
    fishName: {
      type: String,
      default: "namn",
    },
  },
  computed: {
    formattedFishName() {
      return this.nameUpdated
        ? fishTranslations[this.newFishName.toLowerCase()] || this.newFishName
        : this.originalFishName;
    },
    showWelcomeMessage() {
      return !!this.newFishName || !!this.originalFishName;
    },
  },
  methods: {
    updateFishName() {
      this.nameUpdated = true;
      this.$emit("update:fishName", this.newFishName);
    },
  },
  watch: {
    fishName() {
      this.originalFishName = this.fishName;
    },
  },
  created() {
    this.originalFishName = this.fishName;
  },
};
</script>

<style scoped>
#translator-div {
  margin-top: 10px auto;
}
button {
  margin: 5px;
  border-radius: 8px;
  background-color: azure;
}
#fish-input {
  border-radius: 8px;
  background-color: azure;
}
</style>

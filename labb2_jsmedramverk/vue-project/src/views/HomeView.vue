<script setup>
import FishLinks from "../components/FishLinks.vue";
import HeroImage from "../components/HeroImage.vue";
import LatinTranslator from "../components/LatinTranslator.vue";
</script>

<template>
  <main>
    <HeroImage />

    <div class="top-div">
      <LatinTranslator />
      <h1>Fiskarter</h1>
      <p>
        Läs mer om dessa tio fiskarter genom att klicka på namn i listan
        nedanför.
      </p>
    </div>
    <FishLinks />
  </main>
</template>

<style>
.top-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>

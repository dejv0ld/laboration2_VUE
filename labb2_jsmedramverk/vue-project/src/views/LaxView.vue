<script setup></script>

<template>
  <main>
    <h3>Art</h3>
    <p>
      <strong>Lax</strong> (Salmo salar) är en art av fisk som tillhör familjen
      Laxartade och är en av de mest viktiga fiskarna i nordatlantiska områden.
      Dessa fiskar har en lång, slank kropp med en silverskimrande färg och en
      gles skinnfläckning. De vuxna laxarna kan väga upp till 20 kg och mäta upp
      till 120 cm i längd.
    </p>
    <div class="fish-hero"><h2>Laxen</h2></div>
    <p>
      lever i Atlanten och i vissa stora sjöar i Europa och Nordamerika, där den
      ofta förekommer i kalla vatten. Den är en anadrom fisk, vilket innebär att
      den vandrar från havet till födelseplatsen för att leka. Under denna
      vandring kan laxen resa tusentals kilometer uppströms och använder sin
      starka simförmåga för att ta sig genom vattenfall och starkt strömmande
      vatten.
    </p>
    <h3>Odling</h3>
    <p>
      Laxen är en viktig föda för många däggdjur, inklusive björnar, örnar och
      sälar, samt för människor. I Europa och Nordamerika har laxodling blivit
      en viktig industri, där miljoner laxfiskar uppföds i stora dammar för
      konsumtion. Denna industri har också bidragit till en ökning av den totala
      tillgängligheten av lax på marknaden, samtidigt som den minskar beroendet
      av vildfiskning.
    </p>
    <p>
      Trots det faktum att laxodling har ökat tillgängligheten av fisken, har
      det också bidragit till en ökning av problem relaterade till miljöpåverkan
      och förvaltning av fiskbestånd. För att säkerställa en hållbar fiskodling
      har många regeringar implementerat regler och riktlinjer för att begränsa
      utsläpp av fiskfarmar och förbättra fiskens välfärd.
    </p>
  </main>
</template>

<style scoped>
.fish-hero {
  display: flex;
  flex-direction: column;
  background-image: url("../images/lax.jpeg");
  background-position: bottom;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
  height: 30vh;
  margin: 1vh 5vw 1vh 5vw;
}
p {
  margin: 1vh 5vw 1vh 5vw;
}
h2 {
  color: white;
  font-size: 36px;
}

h3 {
  margin: 1vh 5vw 1vh 5vw;
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <ul class="navbar-list">
        <li class="list-item">
          <RouterLink to="/"><a>Hem</a></RouterLink>
        </li>
        <li class="list-item">
          <RouterLink to="/about"><a>Om oss</a></RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.navbar-list {
  display: flex;
  flex-direction: row;
}

.list-item {
  list-style-type: none;
  padding-right: 10px;
}

a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
</style>

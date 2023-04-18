<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav id="global-nav">
    <RouterLink to="/" class="nav-router-link">Tune</RouterLink>
    <RouterLink to="/symbols" class="nav-router-link">Symbols</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
#global-nav {
  display: flex;
  font-size: 20px;
  font-weight: 600;
  background-color: var(--color-background-mute);
}

.nav-router-link {
  display: block;
  width: 50%;
  text-align: center;
  line-height: 2.5em;
  border-bottom: 3px solid transparent;
  color: var(--vt-c-dim-toxic-green);
}

.router-link-active {
  border-bottom: 3px solid var(--accent-color);
  color: var(--accent-color);
}
</style>

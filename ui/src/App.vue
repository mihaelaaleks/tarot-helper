<script setup>
import { useRoute } from 'vue-router'

// const route = useRoute()
// watch(
//   () => route.params.id,
//   (newId, oldId) => {
//     // react to changes
//     // handy to use when switching between /users/johnny to /users/janine
//   }
// )
</script>

<template>
  <header>
    <nav>
      <h1>Moonlight Guide</h1>
      <RouterLink to="/moon-mood/" class="nav-item"> Moon </RouterLink>
      <RouterLink to="/"> Go home </RouterLink>
      <RouterLink to="/tarot/"> Tarot </RouterLink>
    </nav>

    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Hoorah!" />
    </div> -->
  </header>

  <main>
    <div name="content-grid">
      <router-view></router-view>
      Content goes here
    </div>
  </main>
</template>

<style scoped>
.nav-item:active {
  background-color: aliceblue;
}

header {
  line-height: 1.5;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>

<template>
  <div>
    <navBar v-if="$route.name !== 'notFound'" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

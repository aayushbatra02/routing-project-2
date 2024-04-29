<template>
  <div class="flex items-center justify-center mt-4 sm:mt-5 lg:mt-6 sm:text-lg">
    <RouterLink
      v-for="(item, id) in navItems"
      :key="id"
      :to="item.path"
      class="cursor-pointer capitalize px-3"
      activeClass="bg-red-500 text-white py-1 rounded font-bold"
    >
      {{ item.name }}
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "jobs", path: "/jobs" },
      ],
    };
  },
};
</script>

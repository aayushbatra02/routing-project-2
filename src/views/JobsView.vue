<template>
   <div class="flex flex-col items-center mt-8">
      <div class="flex justify-center text-xl md:text-2xl lg:text-3xl font-bold mb-4">Jobs</div>
      <div
        class="bg-gray-200 mb-2 lg:mb-3 w-[60%] md:w-[40%] xl:w-[30%] text-center py-2 rounded cursor-pointer text-xl md:text-2xl lg:text-[1.35rem]:text-3xl"
        v-for="job in jobs"
        :key="job.id"
        @click="goToDetails(job.id)"
      >
        {{ job.title }}
      </div>
    </div>
</template>
  
<script>
import jobsData from "../json/jobsData.json";
export default {
  data() {
    return {
      jobs: jobsData,
    };
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`jobs/${id}`);
    },
  },
};
</script>
  
<template>
  <div
    v-if="job"
    class="flex flex-col mt-8 gap-2 lg:gap-4 w-max m-auto border-2 border-black p-4 lg:p-6 rounded sm:text-lg lg:text-2xl"
  >
    <div class="flex flex-row">
      <div class="w-[8rem] lg:w-[10rem] font-bold">Job Id</div>
      <div class="text-blue-900 font-bold">{{ jobId }}</div>
    </div>
    <div class="flex flex-row">
      <div class="w-[8rem] lg:w-[10rem] font-bold">Job Title</div>
      <div class="text-blue-900 font-bold">{{ job.title }}</div>
    </div>
  </div>
  <div
    v-else
    class="flex flex-col mt-8 gap-2 lg:gap-4 w-max m-auto border-2 border-black p-4 lg:p-6 rounded sm:text-lg lg:text-2xl"
  >
    JOB NOT FOUND
  </div>
</template>
  
<script>
import jobsData from "../json/jobsData.json";
export default {
  data() {
    return {
      jobId: null,
      job: null,
    };
  },
  watch: {
    "$route.params": {
      handler() {
        this.getJob();
      },
      immediate: true,
    },
  },

  methods: {
    getJob() {
      this.jobId = this.$route.params.jobId;
      this.job = jobsData.find((job) => Number(job.id) === Number(this.jobId));
    },
  },
};
</script>
  
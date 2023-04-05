<template>
  <div v-if="data">
    <page-header></page-header>
    <user-table></user-table>
    <BarChart></BarChart>
    <page-footer></page-footer>
  </div>
</template>

<script>
import userTable from "./components/user-table.vue";
import BarChart from "./components/bar-chart.vue";
import {onMounted, ref} from "vue";
import { useStore } from "vuex";

const data = ref(null);

export default {
  name: "App",
  components: {
    userTable,
    BarChart,
  },
  setup() {
    onMounted(async () => {
      const store = useStore()
      await store.dispatch("getData");
      data.value = true;
    })
    return {
      data
    }
  },
};
</script>

<style></style>

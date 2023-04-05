<template>
  <h2>Bar chart</h2>
  <Bar :data="chartData" class="graph" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { useStore } from "vuex";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  responsive: true,
  name: 'BarChart',
  components: { Bar },
  data() {
    const store = useStore();
    const totalUsers = () => store.getters.getUserData
    const totalValue = totalUsers()?.reduce((total, curr) => total + curr.value, 0);
    const averageValue = totalValue / totalUsers()?.length
    const valueMoreThanFifth = totalUsers()?.filter((item) => item.value >= 50).length;
    return {
      chartData: {
        labels: [ 'Total value', 'Average value', 'Values more than 50'],
        datasets: [
          {
            label: 'User data',
            backgroundColor: '#113f67',
            data: [totalValue, averageValue, valueMoreThanFifth]
          }
        ]
      },

    }
  }
}
</script>

<style>
  .graph{
    width: 500px !important;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    background-color: #e7eaf6;
  }

  h2{
    color:#113f67;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
  }
</style>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      class="table"
    />
  </n-config-provider>

  <n-modal
    class="custom-card"
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="More information"
    :bordered="true"
    size="huge"
    :segmented="segmented"
  >
    <div v-if="showModal">
      <h3>Id: {{ data.details.id }}</h3>
      <h4>Date: {{ data.details.date }}</h4>
      <p class="description">Description: {{ data.details.description }}</p>
    </div>
  </n-modal>
</template>

<script>
import { h, defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
import { NDataTable, NConfigProvider, NButton, NModal } from "naive-ui";

export default defineComponent({
  components: {
    NDataTable,
    NConfigProvider,
    NModal,
  },
  setup() {
    let showModal = ref(false)
    const store = useStore();
    const userData = () => store.getters.getUserData;
    const data = userData();
    const createColumns = ({ show }) => {
      return [
        {
          title: "id",
          key: "id",
        },
        {
          title: "value",
          key: "value",
        },
        {
          title: "name",
          key: "name",
        },
        {
          title: "Action",
          key: "actions",
          render(row) {
            return h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: "small",
                onClick: () => show(row.id),
              },
              { default: () => "Details" }
            );
          },
        },
      ];
    };

    const themeOverrides = {
      common: {
        primaryColor: "#0048ff",
      },
      DataTable: {
        thColor: "#a2a8d3",
        thTextColor: "#fff",
      },
    };
    const paginationReactive = reactive({
      onUpdatePageSize: (pageSize) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      },
    });

    return {
      data,
      columns: createColumns({
        async show(id) {
          try {
            await store.dispatch("getDetail", id);
          } catch (error) {
            console.log("Error occured while getting user details", error);
          }
          const extendedUserData = () => store.getters.getExtendedData;
          const extendedData = extendedUserData();
          data.details = extendedData;
          showModal.value = true;
        },
      }),
      themeOverrides,
      bodyStyle: {
        width: "700px",
      },
      segmented: {
        content: "soft",
        footer: "soft",
      },
      showModal,
      pagination: paginationReactive,
    };
  },
});
</script>

<style>
.custom-card {
  background-color: #e7eaf6 !important;
  object-fit: cover;
  width: 700px !important;
}

.description {
  border: 1px solid #113f67;
  padding: 5px;
}

.action {
  width: 100px !important;
}

@media screen and (min-width: 1024px) {
  .table {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* For Tablet View */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .table {
    width: 90%;
  }
}

/* For Mobile Portrait View */
@media screen and (max-width: 480px) and (orientation: portrait) {
  .table {
    width: 80%;
  }
}

/* For Mobile Landscape View */
@media screen and (max-width: 640px) and (orientation: landscape) {
  .table {
    width: 100%;
  }
}

/* For Mobile Phones Portrait or Landscape View */
@media screen and (max-width: 640px) {
  .table {
    width: 100%;
  }
}
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-sheet
          rounded="lg"
          color="info"
          class="mx-auto d-flex justify-center align-center"
          height="50"
          width="100%"
        >
          <h4 class="text-h4 white--text font-weight-bold">Users</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="4" class="d-flex">
        <h5 class="text-h5">Users</h5>
        <v-btn
          color="info"
          x-small
          fab
          depressed
          to="/admin/users/create"
          class="mx-2"
          v-if="userInfo?.role !== 'user' || permission?.create"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          placeholder="Search..."
          dense
          hide-details="auto"
          background-color="grey lighten-4"
          solo
          flat
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :filter-keys="['title', 'category', 'type']"
          :items="items"
          show-select
        >
          <template #[`item.name`]="{ item }">
            <div class="d-flex align-center">
              <v-avatar
                size="45"
                :color="item.photo ? '' : 'grey lighten-4'"
                :class="item.photo ? '' : 'v-avatar-light-bg primary--text'"
                :variant="!item.photo ? 'tonal' : undefined"
                tile
                rounded="lg"
              >
                <v-img v-if="item.photo" :src="`${baseUrl}${item.photo}`" />
                <v-icon v-else>mdi-account</v-icon>
              </v-avatar>
              <div class="d-flex flex-column ms-3">
                <span
                  class="d-block font-weight-medium text-high-emphasis text-truncate"
                  >{{ item.name }}</span
                >
              </div>
            </div>
          </template>
          <template #[`item.age`]="{ item }">
            {{ calulateAge(item.dateOfBirth) }}
          </template>
          <template #[`item.action`]="{ item }">
            <div class="d-flex">
              <v-btn
                color="primary"
                v-if="userInfo?.role !== 'user' || permission?.edit"
                icon
                :to="`/admin/users/edit/${item.id}`"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn
                color="error"
                v-if="userInfo?.role !== 'user' || permission?.delete"
                icon
                @click="deleteData(item.id)"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  name: "UsersPage",
  data() {
    return {
      permission: {},
      search: "",
      headers: [
        { value: "name", text: "User Name", width: "30%" },
        { value: "phone", text: "Phone" },
        { value: "duty", text: "Duty" },
        { value: "age", text: "Age" },
        { value: "gender", text: "Gender" },
        { value: "action", text: "Action" },
      ],
      items: [],
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  mounted() {
    this.fetchData();
    this.permission = this.userInfo.permissions.find(
      (it) => it.link === this.$route.path
    );
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await this.axios.get(`/account?role=user`);
        this.items = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async deleteData(id) {
      // confirm delete
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;

      //delete data from api
      try {
        await this.axios.delete(`/account/${id}`);
        this.$swal("Material deleted successfully", "", "success");
        this.fetchData();
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

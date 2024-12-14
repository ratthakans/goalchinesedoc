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
          <h4 class="text-h4 white--text font-weight-bold">Setting</h4>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12" md="3" class="d-flex align-start mt-2">
            <label class="v-label text-body-2 font-weight-bold"
              >Upload School Logo :
            </label>
          </v-col>

          <v-col cols="12" md="9">
            <v-file-input
              v-model="formInput.file"
              dense
              outlined
              label="Choose a file..."
              hide-details="auto"
              accept="image/*"
            />
            <v-avatar
              class="mt-2 mx-2"
              rounded="xl"
              size="150"
              color="grey lighten-3"
            >
              <img v-if="formInput.logo" :src="formInput.logo" alt="John" />
            </v-avatar>
            <v-btn color="error" class="text-none mt-2" @click="deleteLogo">
              Remove Logo
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12" md="3" class="d-flex align-start mt-2">
            <label class="v-label text-body-2 font-weight-bold"
              >Academy Name :
            </label>
          </v-col>

          <v-col cols="12" md="9">
            <v-text-field
              v-model="formInput.academyName"
              dense
              hide-details="auto"
              outlined
            />
            <v-btn
              color="success"
              depressed
              class="text-none mt-2"
              @click="saveSetting"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="10">
        <h6 class="text-h6">Others setting</h6>
      </v-col>
      <v-col cols="10">
        <v-row dense v-for="(value, name, index) in isvisible" :key="index">
          <v-col cols="12">
            <label class="v-label text-body-2 font-weight-bold text-capitalize"
              >{{ name }}
            </label>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <v-chip
                  class="mx-2"
                  size="large"
                  closable
                  label
                  rounded="lg"
                  v-for="(item, ix) in items[name]"
                  :key="ix"
                  @click="
                    editItems[name] = item;
                    (formData[name] = item.name), (isvisible[name] = true);
                  "
                  close
                  @click:close="deleteData(name, item.id)"
                >
                  {{ item.name }}
                </v-chip>
              </v-col>

              <v-col cols="6" v-if="isvisible[name]">
                <div class="d-flex">
                  <v-text-field
                    v-model="formData[name]"
                    dense
                    outlined
                    single-line
                    hide-details="auto"
                    :placeholder="`Enter ${name}`"
                  />
                  <v-btn
                    color="success"
                    class="mx-1"
                    @click="saveData(name, formData[name], editItems[name]?.id)"
                    >save</v-btn
                  >
                  <v-btn color="error" @click="isvisible[name] = false"
                    >cancle</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="auto" v-else>
                <v-btn
                  color="info"
                  fab
                  dark
                  x-small
                  depressed
                  @click="
                    ((formData[name] = ''), (editItems[name] = '')),
                      (isvisible[name] = !isvisible[name])
                  "
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="10">
        <v-btn color="info" class="text-none"> view history details </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SettingPage",
  data() {
    return {
      formInput: {
        file: null,
        logo: "",
        academyName: "",
      },
      editItems: {
        branch: "",
        materialType: "",
        classType: "",
        studentType: "",
        teacherType: "",
        materialFor: "",
        materialCategory: "",
        currency: "",
      },
      formData: {
        branch: "",
        materialType: "",
        classType: "",
        studentType: "",
        teacherType: "",
        materialFor: "",
        materialCategory: "",
        currency: "",
      },
      isvisible: {
        branch: false,
        materialType: false,
        classType: false,
        studentType: false,
        teacherType: false,
        materialFor: false,
        materialCategory: false,
        currency: false,
      },
      items: {
        branch: [],
        materialType: [],
        classType: [],
        studentType: [],
        teacherType: [],
        materialFor: [],
        materialCategory: [],
        currency: [],
      },
    };
  },
  watch: {
    "formInput.file": function (val) {
      if (val) {
        this.formInput.logo = URL.createObjectURL(val);
      }
    },
  },
  mounted() {
    this.fetchSetting();

    this.fetchData("branch", "branch");
    this.fetchData("materialType", "materialType");
    this.fetchData("classType", "classType");
    this.fetchData("studentType", "studentType");
    this.fetchData("teacherType", "teacherType");
    this.fetchData("materialFor", "materialFor");
    this.fetchData("materialCategory", "materialCategory");
    this.fetchData("currency", "currency");
  },
  methods: {
    async fetchSetting() {
      // fetch data from api
      try {
        const { data } = await this.axios.get(`/setting`);

        if (data.length) {
          if (data[0].logo)
            this.formInput.logo = process.env.VUE_APP_API_IMAGE + data[0].logo;
          this.formInput.academyName = data[0].academyName;
        } else {
          this.formInput.logo = null;
          this.formInput.academyName = "";
        }
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async saveSetting() {
      try {
        const formData = new FormData();
        formData.append("logo", this.formInput.file);
        formData.append("academyName", this.formInput.academyName);

        await this.axios.post(`/setting`, formData);
        this.fetchSetting();
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async deleteLogo() {
      // confirm delete
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;
      try {
        await this.axios.delete(`/setting/logo`);
        this.fetchSetting();
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async fetchData(uri, items) {
      // fetch data from api
      try {
        const { data } = await this.axios.get(`/${uri}`);
        this.items[items] = data;
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async saveData(key, payload, id) {
      // save data to api
      try {
        if (id) {
          await this.axios.put(`/${key}/${id}`, { name: payload });
        } else {
          await this.axios.post(`/${key}`, { name: payload });
        }
        this.fetchData(key, key);
        this.isvisible[key] = !this.isvisible[key];
        this.formData[key] = "";
        this.editItems[key] = "";
      } catch (error) {
        this.$swal.fire({
          title: error.response.data.error,
          text: error.response.data.details,
          icon: "error",
        });
      }
    },
    async deleteData(key, id) {
      // confirm delete
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;

      // delete data from api
      try {
        await this.axios.delete(`/${key}/${id}`);
        this.fetchData(key, key);
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

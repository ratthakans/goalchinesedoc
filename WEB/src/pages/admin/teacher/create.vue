<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex ga-2 align-center">
        <v-btn variant="text" icon to="/admin/teacher/all" class="mr-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h5 class="text-h5">New Teacher</h5>
      </v-col>
    </v-row>

    <v-form ref="form" lazy-validation>
      <FormTeacher
        v-model="formInput"
        :flagCreate="true"
        @refFormFee="(ref) => (refFormFee = ref)"
        @dataFormFee="(data) => (formFeeStructure = data)"
        @refFormScore="(ref) => (refFormScore = ref)"
        @dataFormScore="(data) => (formScoreStructure = data)"
      />
    </v-form>

    <v-row justify="end">
      <v-col cols="auto">
        <v-btn
          color="primary"
          depressed
          class="text-none"
          @click="create"
          v-if="userInfo?.role !== 'user' || permissionq?.create"
        >
          <v-icon left> mdi-content-save </v-icon>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";

import FormTeacher from "./form/teacher.vue";
export default {
  name: "CreateTeacher",
  components: {
    FormTeacher,
  },
  data() {
    return {
      permission: {},
      formInput: {},
      refFormFee: null,
      formFeeStructure: [],
      refFormScore: null,
      formScoreStructure: [],
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  mounted() {
    this.permission = this.userInfo.permissions.find(
      (it) => it.link === this.$route.path
    );
  },
  methods: {
    async create() {
      if (!this.$refs.form.validate()) return;
      for (let i = 0; i < this.refFormFee?.length; i++) {
        if (!this.refFormFee[i].validate()) return;
      }
      for (let i = 0; i < this.refFormScore?.length; i++) {
        if (!this.refFormScore[i].validate()) return;
      }
      try {
        this.formInput.role = "teacher";
        let formData = new FormData();
        for (let key in this.formInput) {
          if (this.formInput[key] && key !== "photo") {
            formData.append(key, this.formInput[key]);
          } else if (key === "photo") {
            formData.append("profile", this.formInput[key]);
          }
        }
        const { data } = await this.axios.post(`/account`, formData);

        const accountID = data.account.id;

        for (let i = 0; i < this.formFeeStructure.length; i++) {
          await this.axios.post(`/feeStructure`, {
            ...this.formFeeStructure[i],
            accountID: accountID,
          });
        }

        for (let i = 0; i < this.formScoreStructure.length; i++) {
          await this.axios.post(`/pointStructure`, {
            ...this.formScoreStructure[i],
            accountID: accountID,
            updateBy: this.userInfo.accountID,
          });
        }

        this.$swal(data?.message, "", "success");
        this.$router.push({ name: "teacher" });
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

<style scoped></style>

<template>
  <v-row justify="center" dense class="mt-6">
    <v-col cols="12">
      <v-card outlined>
        <v-card-title primary-title>Teacher fee structure </v-card-title>
        <v-card-text>
          <v-card
            color="grey lighten-4"
            variant="flat"
            class="mb-4"
            v-for="(item, inx) in itemsFeeStruture"
            :key="inx"
          >
            <div style="position: absolute; top: 5; right: 0">
              <v-btn
                color="info"
                dense
                icon
                @click="saveFeestructure(item.id, item, inx)"
                v-if="userInfo?.role !== 'user' || permission?.edit"
                v-show="!flagView"
              >
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
              <v-btn
                color="error"
                dense
                icon
                @click="deleteFeeStructure(item.id, inx)"
                v-if="userInfo?.role !== 'user' || permission?.delete"
                v-show="!flagView"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </div>
            <v-card-text>
              <v-form ref="formFee" lazy-validation>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-row>
                      <v-col cols="12">
                        <label class="v-label mb-2 text-subtitle-2">
                          <span class="red--text mr-2">*</span> Update Date :
                        </label>

                        <v-menu
                          ref="refUpdateDate"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="item.updateDate"
                              label="Select date"
                              append-icon="mdi-calendar"
                              dense
                              outlined
                              single-line
                              :disabled="flagView"
                              hide-details="auto"
                              readonly
                              background-color="surface"
                              :rules="[(v) => !!v || 'Update date is required']"
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="item.updateDate"
                            :min="new Date().toISOString().substring(0, 10)"
                            @change="
                              $refs.refUpdateDate[inx].save(item.updateDate)
                            "
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12">
                        <label class="v-label mb-2 text-subtitle-2">
                          Note :
                        </label>
                        <v-text-field
                          v-model="item.note"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          placeholder="Enter note"
                          background-color="surface"
                          :readonly="flagView"
                        />
                      </v-col>
                    </v-row>
                  </v-col>

                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      Salary for group class :
                    </label>

                    <v-textarea
                      v-model="item.salaryForGroupClass"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter salary for group class"
                      background-color="surface"
                      :readonly="flagView"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      Salary for private class :
                    </label>

                    <v-textarea
                      v-model="item.salaryForPrivateClass"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      placeholder="Enter salary for private class"
                      background-color="surface"
                      :readonly="flagView"
                    />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-btn
          color="info"
          rounded
          absolute
          right
          top
          small
          @click="addFeeStructure"
          v-if="userInfo?.role !== 'user' || permission?.create"
          v-show="!flagView"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  props: {
    flagView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      itemsFeeStruture: [],
      defaultValue: {
        updateDate: "",
        salaryForGroupClass: "",
        salaryForPrivateClass: "",
        note: "",
      },
    };
  },
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  watch: {},
  async mounted() {
    if (this.$route.params.id) {
      await this.getFeeStructure();
    }

    if (this.itemsFeeStruture.length === 0) {
      this.addFeeStructure();
    }
    this.permission = this.userInfo.permissions.find(
      (it) => it.link === this.$route.path
    );
  },
  methods: {
    async getFeeStructure() {
      try {
        const { data } = await this.axios.get(
          `/feeStructure/account/${this.$route.params.id}`
        );
        this.itemsFeeStruture = data.map((it) => {
          return {
            ...it,
            updateDate: it.updateDate.substring(0, 10),
          };
        });
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details
              .map((it) => it.message)
              .join("\n"),
            icon: "error",
          });
      }
    },
    addFeeStructure() {
      this.itemsFeeStruture.push({ ...this.defaultValue });
    },
    async saveFeestructure(id, item, index) {
      if (!this.$refs.formFee[index].validate()) return;
      try {
        let res = {};
        if (id) {
          res = await this.axios.put(`/feeStructure/${id}`, {
            ...item,
            accountID: this.$route.params.id,
          });
        } else {
          res = await this.axios.post(`/feeStructure`, {
            ...item,
            accountID: this.$route.params.id,
          });
        }

        this.$swal(res?.data?.message, "", "success");
        this.getFeeStructure();
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details
              .map((it) => it.message)
              .join("\n"),
            icon: "error",
          });
      }
    },
    async deleteFeeStructure(id, index) {
      // confirm delete
      const { isDismissed } = await this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
      });

      if (isDismissed) return;
      try {
        if (id) {
          await this.axios.delete(`/feeStructure/${id}`);
          this.getFeeStructure();
        } else {
          this.itemsFeeStruture.splice(index, 1);
        }
      } catch (error) {
        if (error.response.status !== 404)
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

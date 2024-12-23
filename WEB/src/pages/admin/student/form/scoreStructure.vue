<template>
  <v-row justify="center" dense class="mt-6">
    <v-col cols="12">
      <v-card outlined>
        <v-card-title primary-title>Student point structure</v-card-title>
        <v-card-text>
          <v-card
            color="grey lighten-4"
            variant="flat"
            class="mb-4"
            v-for="(item, inx) in itemsScoreStruture"
            :key="inx"
          >
            <div style="position: absolute; top: 5; right: 0">
              <v-btn
                color="info"
                dense
                icon
                @click="saveScorestructure(item.id, item, inx)"
                v-if="userInfo?.role !== 'user' || permission?.edit"
                v-show="!flagView"
              >
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
              <v-btn
                color="error"
                dense
                icon
                @click="deleteScoreStructure(item.id, inx)"
                v-show="!flagView"
                v-if="userInfo?.role !== 'user' || permission?.delete"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </div>
            <v-card-text>
              <v-form ref="formPoint" lazy-validation>
                <v-row>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Update point Date :
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
                          :rules="[(v) => !!v || 'Pay date is required']"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="item.updateDate"
                        :min="new Date().toISOString().substring(0, 10)"
                        @change="$refs.refUpdateDate[inx].save(item.updateDate)"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-row>
                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          Total point :
                        </label>
                        <v-text-field
                          v-model="item.totalPoint"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          :readonly="flagView"
                          background-color="surface"
                        />
                      </v-col>

                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          Point up :
                        </label>
                        <v-text-field
                          v-model="item.pointUp"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          :readonly="flagView"
                          background-color="surface"
                        />
                      </v-col>
                      <v-col cols="12" md="">
                        <label class="v-label mb-2 text-subtitle-2">
                          Point down :
                        </label>
                        <v-text-field
                          v-model="item.pointDown"
                          dense
                          outlined
                          single-line
                          hide-details="auto"
                          :readonly="flagView"
                          background-color="surface"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      Point after update :
                    </label>

                    <v-text-field
                      v-model="item.pointAfterUpdate"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :readonly="flagView"
                      background-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="8">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> Resonal for update :
                    </label>
                    <v-text-field
                      v-model="item.resonalForUpdate"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      :readonly="flagView"
                      background-color="surface"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <label class="v-label mb-2 text-subtitle-2">
                      <span class="red--text mr-2">*</span> admin :
                    </label>
                    <v-text-field
                      :value="userInfo?.username"
                      dense
                      outlined
                      single-line
                      hide-details="auto"
                      readonly
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
          v-show="!flagView"
          v-if="userInfo?.role !== 'user' || permission?.create"
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
      permission: {},
      itemsScoreStruture: [],
      defaultValue: {
        updateDate: "",
        totalPoint: null,
        pointUp: null,
        pointDown: null,
        pointAfterUpdate: "",
        resonalForUpdate: null,
        updateBy: null,
      },
    };
  },
  watch: {},
  computed: {
    ...mapState(useAppStore, {
      userInfo: "getUserinfo",
    }),
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.getPointStructure();
    }

    if (this.itemsScoreStruture.length === 0) {
      this.addFeeStructure();
    }
    this.permission = this.userInfo.permissions.find(
      (it) => it.link === this.$route.path
    );
  },
  methods: {
    async getPointStructure() {
      try {
        const { data } = await this.axios.get(
          `/pointStructure/account/${this.$route.params.id}`
        );
        this.itemsScoreStruture = data;
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details,
            icon: "error",
          });
      }
    },
    addFeeStructure() {
      this.itemsScoreStruture.push({ ...this.defaultValue });
    },
    async saveScorestructure(id, item, index) {
      if (!this.$refs.formPoint[index].validate()) return;
      try {
        let res = {};
        if (id) {
          res = await this.axios.put(`/pointStructure/${id}`, {
            ...item,
            accountID: Number(this.$route.params.id),
          });
        } else {
          res = await this.axios.post(`/pointStructure`, {
            ...item,
            accountID: Number(this.$route.params.id),
            updateBy: this.userInfo.accountID,
          });
        }

        this.$swal(res?.data?.message, "", "success");
        this.getPointStructure();
      } catch (error) {
        if (error.response.status !== 404)
          this.$swal.fire({
            title: error.response.data.error,
            text: error.response.data.details,
            icon: "error",
          });
      }
    },
    async deleteScoreStructure(id, index) {
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
          await this.axios.delete(`/pointStructure/${id}`);
          this.getPointStructure();
        } else {
          this.itemsScoreStruture.splice(index, 1);
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

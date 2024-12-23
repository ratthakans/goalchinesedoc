<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Student Name :
        </label>
        <label for="">{{ itemData?.name }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Class No : </label>
        <label for="">{{ itemData?.no }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Branch : </label>
        <label for="">{{ itemData?.branch?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Class Type : </label>
        <label for="">{{ itemData?.classType?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="3">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Number Of Student :
        </label>
        <label for="">{{ itemData?.numberOfStudent || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="3">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Study fee/person :
        </label>
        <label for="">{{ itemData?.studentFee || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="3">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Discount : </label>
        <label for="">{{ itemData?.discount || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="3">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Discount Note :
        </label>
        <label for="">{{ itemData?.discountNote || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Total fee per class :
        </label>
        <label for="">{{ itemData?.totalFeePerClass || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Teacher Name :
        </label>
        <label for="">{{ itemData?.teacher?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Student Name :
        </label>
        <label for="">{{
          itemData?.classStudent?.map((it) => it.account.name).join(",") ||
          "N/A"
        }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Class Status :
        </label>
        <label for="">{{ itemData?.status || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Material Type :
        </label>
        <label for="">{{ itemData?.materialType?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Note : </label>
        <label for="">{{ itemData?.note || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Number of time registered (times) :
        </label>
        <label for="">{{ itemData?.registeredTimes || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Teacher can leave (times) :
        </label>
        <label for="">{{ itemData?.teacherLeave || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Student can leave (times) :
        </label>
        <label for="">{{ itemData?.studentLeave || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Start date : </label>
        <label for="">{{ itemData?.startDate || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> End date : </label>
        <label for="">{{ itemData?.endDate || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Study time per time :
        </label>
        <label for="">{{ itemData?.studyTimePerTime || "N/A" }}</label>
      </v-col>

      <v-col cols="12">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Start time : </label>

        <v-row v-for="(item, i) in itemData?.classStudy" :key="i">
          <v-col cols="2" offset="1">
            <label for="">{{ item.day || "N/A" }}</label>
          </v-col>
          <v-col cols="auto" offset="1">
            <label for="">{{ item.startTime || "N/A" }}</label>
          </v-col>
          <v-col cols="auto"> : </v-col>
          <v-col cols="2">
            <label for="">{{ item.endTime || "N/A" }}</label>
          </v-col>
          <v-col cols="2">
            <label for="">{{ item.note || "N/A" }}</label>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Study platform :
        </label>
        <label for="">{{ itemData?.studyPlatform || "N/A" }}</label>
      </v-col>

      <v-col cols="12" md="8">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Link : </label>
        <label for="">{{ itemData?.link || "N/A" }}</label>
      </v-col>

      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Admin name : </label>
        <label for="">{{ itemData?.updatedBy?.name || "N/A" }}</label>
      </v-col>

      <v-col cols="12" md="8">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Note : </label>
        <label for="">{{ itemData?.note || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md>
        <label class="v-label mb-2 text-subtitle-2">
          <span class="red--text mr-2">*</span>Check list :
        </label>

        <v-checkbox
          v-for="(item, i) in checkList"
          :key="i"
          v-model="selectedCheckList"
          readonly
          :label="item"
          :value="i + 1"
          hide-details="auto"
          :rules="[
            (v) => !!v || 'Check list is required',
            (v) => v.length > 0 || 'Check list is required',
          ]"
        ></v-checkbox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ViewStudent",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectedCheckList: [],
      checkList: [
        "Send metarials to students",
        "Send study link to students",
        "Send study link to teacher",
        "Send study link to admin",
      ],
    };
  },
  watch: {
    itemData() {
      this.selectedCheckList =
        this.itemData.checkList.split(",").map((it) => Number(it)) || [];
    },
  },
};
</script>

<style scoped></style>

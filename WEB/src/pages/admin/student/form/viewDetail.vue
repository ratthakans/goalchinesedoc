<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Student Name :
        </label>
        <label for="">{{ itemData.name }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Gender :
        </label>
        <label for="">{{ itemData.gender }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Age :
        </label>
        <label for="">{{ calulateAge(itemData.dateOfBirth) }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Date of Birth :
        </label>
        <label for="">{{ itemData.dateOfBirth }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Address :
        </label>
        <label for="">{{ itemData.address || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          Phone :
        </label>
        <label for="">{{ itemData.phone || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          School name :
        </label>
        <label for="">{{ itemData.schoolName || "N/A" }}</label>
      </v-col>

      <v-col cols="12">
        <span class="text-subtitle-1 font-weight-bold">Admission Detail</span>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Addmission Date :
        </label>
        <label for="">{{ itemData.addmissionDate || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Student type :
        </label>
        <label for="">{{ itemData.studentType?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Class Type :
        </label>
        <label for="">{{ itemData.classType?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >End Class Date :
        </label>
        <label for="">{{ itemData.endClassDate || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Admission No. :
        </label>
        <label for="">{{ itemData.addmissionNo || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Student Status :
        </label>
        <label for="">{{ itemData.status || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2"
          >Branch :
        </label>
        <label for="">{{ itemData.branch?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 font-weight-bold mr-2">
          extra note details :
        </label>
        <label for="">{{ itemData.note || "N/A" }}</label>
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
};
</script>

<style scoped></style>

<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Personal Name :
        </label>
        <label for="">{{ itemData.name }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Gender : </label>
        <label for="">{{ itemData.gender }}</label>
      </v-col>
      <v-col cols="12" md="2">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Age : </label>
        <label for="">{{ calulateAge(itemData.dateOfBirth) }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Date of Birth :
        </label>
        <label for="">{{ itemData.dateOfBirth }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Address : </label>
        <label for="">{{ itemData.address || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Phone : </label>
        <label for="">{{ itemData.phone || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"> Resume No : </label>
        <label for="">{{ itemData.resumeNo || "N/A" }}</label>
      </v-col>

      <v-col cols="12">
        <span class="text-subtitle-1 font-weight-bold">Admission Detail</span>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"
          >Register Date :
        </label>
        <label for="">{{ itemData.registerDate || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"
          >Score for kids :
        </label>
        <label for="">{{ itemData.scoreForKids || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"
          >Score for Adult :
        </label>
        <label for="">{{ itemData.scoreForAdult || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">Teacher type : </label>
        <label for="">{{ itemData.teacherType?.name || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <label class="v-label mb-2 text-subtitle-2 mr-2">Register No : </label>
        <label for="">{{ itemData.registerNo || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"
          >Available for class :
        </label>
        <label for="">{{ itemData.avaliableForClass || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">Language : </label>
        <label for="">{{ itemData.language || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2">
          Inter view note details :
        </label>
        <label for="">{{ itemData.note || "N/A" }}</label>
      </v-col>
      <v-col cols="12" md="4">
        <label class="v-label mb-2 text-subtitle-2 mr-2"
          >Teacher status :
        </label>
        <label for="">{{ itemData.status || "N/A" }}</label>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ViewTeacher",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>

<template>
  <v-navigation-drawer color="info" v-model="drawer">
    <div class="py-4">
      <v-list-item>
        <v-img height="100" src="@/assets/logo.png" />
      </v-list-item>
    </div>

    <v-list :lines="false" mandatory nav exact>
      <template v-for="(item, i) in items" :key="i">
        <v-list-item
          v-if="!item?.children?.length"
          :value="item"
          active-class="bg-white"
          color="black"
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>

        <v-list-group v-else :value="item.text" variant="plain">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="item.text" color="black">
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(itemSub, ic) in item.children"
            :key="ic"
            :title="itemSub.text"
            :value="itemSub.text"
            active-class="bg-white"
            color="black"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { text: "Dashboard", icon: "mdi-view-dashboard" },
        {
          text: "Classes",
          icon: "mdi-table-account",
          children: [
            { text: "Calenday", icon: "mdi-calender" },
            { text: "All Class Check", icon: "mdi-account-check" },
          ],
        },
        {
          text: "Student",
          icon: "mdi-account-school",
          children: [
            { text: "All Students" },
            { text: "New Admission" },
            { text: "Student Meterial" },
          ],
        },
        {
          text: "Teacher",
          icon: "mdi-account-tie",
          children: [
            { text: "All Teacher" },
            { text: "New Teacher Register" },
            { text: "Teacher Meterial" },
          ],
        },
        { text: "Users", icon: "mdi-account", to: "/admin/users" },
        { text: "Materials", icon: "mdi-file", to: "/admin/materials" },
        {
          text: "Library",
          icon: "mdi-book-open-page-variant",
          to: "/admin/library",
        },
        { text: "Setting", icon: "mdi-cog", to: "/admin/setting" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

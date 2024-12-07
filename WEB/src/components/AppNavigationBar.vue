<template>
  <v-navigation-drawer v-model="drawer" color="info" app>
    <div class="py-4">
      <v-list-item>
        <v-img height="100" src="@/assets/logo.png" contain />
      </v-list-item>
    </div>

    <v-list nav dense exact dark flat>
      <template v-for="(item, i) in items">
        <v-list-item
          :key="i"
          v-if="!item?.children?.length"
          :value="item"
          :to="item.to"
          active-class="black--text surface"
          link
          dark
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-else
          :key="item.text"
          no-action
          active-class="black--text "
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(itemSub, ic) in item.children"
            :key="ic"
            :value="itemSub.text"
            :to="itemSub.to"
            active-class="black--text surface"
            link
          >
            <v-list-item-title>{{ itemSub.text }}</v-list-item-title>
          </v-list-item>
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
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard",
          to: "/admin/dashboard",
        },
        {
          text: "Classes",
          icon: "mdi-table-account",
          children: [
            {
              text: "Calenday",
              icon: "mdi-calender",
              to: "/admin/classes/calendar",
            },
            {
              text: "All Class Check",
              icon: "mdi-account-check",
              to: "/admin/classes/check",
            },
          ],
        },
        {
          text: "Student",
          icon: "mdi-account-school",
          children: [
            { text: "All Students", to: "/admin/student/all" },
            { text: "New Admission", to: "/admin/student/create" },
            { text: "Student Meterial", to: "/admin/student/materials" },
          ],
        },
        {
          text: "Teacher",
          icon: "mdi-account-tie",
          children: [
            { text: "All Teacher", to: "/admin/teacher/all" },
            { text: "New Teacher Register", to: "/admin/teacher/create" },
            { text: "Teacher Meterial", to: "/admin/teacher/materials" },
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

import Vue from "vue";
import VueRouter from "vue-router";
import { useAppStore } from "@/stores/app";

import LoginLayout from "../layouts/login";
import DefaultLayout from "../layouts/default";

import Login from "../pages/login.vue";
import Dashboard from "../pages/admin/dashboard.vue";

import classesCalenday from "../pages/admin/classes/calendar.vue";
import classesAll from "../pages/admin/classes/all.vue";
import classesCreate from "../pages/admin/classes/create.vue";
import classesEdit from "../pages/admin/classes/edit.vue";
import classesCopy from "../pages/admin/classes/copy.vue";
import classesView from "../pages/admin/classes/view.vue";
import classesAttendance from "../pages/admin/classes/attendance.vue";

import Student from "../pages/admin/student/all.vue";
import StudentCreate from "../pages/admin/student/create.vue";
import StudentView from "../pages/admin/student/view.vue";
import StudentEdit from "../pages/admin/student/edit.vue";
import StudentMaterials from "../pages/admin/student/materials.vue";

import Teacher from "../pages/admin/teacher/all.vue";
import TeacherCreate from "../pages/admin/teacher/create.vue";
import TeacherEdit from "../pages/admin/teacher/edit.vue";
import TeacherView from "../pages/admin/teacher/view.vue";
import TeacherMaterials from "../pages/admin/teacher/materials.vue";

import Users from "../pages/admin/users/index.vue";
import UsersCreate from "../pages/admin/users/create.vue";
import UsersEdit from "../pages/admin/users/edit.vue";

import Materials from "../pages/admin/materials/index.vue";
import MaterialsCreate from "../pages/admin/materials/create.vue";
import MaterialsEdit from "../pages/admin/materials/edit.vue";

import Library from "../pages/admin/library.vue";
import Setting from "../pages/admin/setting.vue";
import Logs from "../pages/admin/logs.vue";

// Student pages
import StudentClass from "../pages/student/class.vue";
import StudentMaterialsPage from "../pages/student/materials.vue";
import Studentlibrary from "../pages/student/library.vue";

// Teacher pages
import TeacherClass from "../pages/teacher/class.vue";
import TeacherMaterialsPage from "../pages/teacher/materials.vue";

import page403 from "../pages/error/403.vue";
import page404 from "../pages/error/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    meta: {
      layout: LoginLayout, // we add new meta layout here to use it later
    },
    component: Login,
  },
  {
    path: "/admin/dashboard",
    name: "dashboard",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Dashboard,
  },

  {
    path: "/admin/classes/calendar",
    name: "classesCalendar",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesCalenday,
  },
  {
    path: "/admin/classes/all",
    name: "classesAll",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesAll,
  },
  {
    path: "/admin/classes/create",
    name: "classesCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesCreate,
  },
  {
    path: "/admin/classes/edit/:id",
    name: "classesEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesEdit,
  },
  {
    path: "/admin/classes/copy/:id",
    name: "classesCopy",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesCopy,
  },
  {
    path: "/admin/classes/view/:id",
    name: "classesView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesView,
  },
  {
    path: "/admin/classes/attendance",
    name: "classesAttendance",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: classesAttendance,
  },
  {
    path: "/admin/student/all",
    name: "student",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Student,
  },
  {
    path: "/admin/student/create",
    name: "studentCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: StudentCreate,
  },
  {
    path: "/admin/student/view/:id",
    name: "studentView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: StudentView,
  },
  {
    path: "/admin/student/edit/:id",
    name: "studentEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: StudentEdit,
  },
  {
    path: "/admin/student/materials",
    name: "studentMaterials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: StudentMaterials,
  },
  {
    path: "/admin/teacher/all",
    name: "teacher",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Teacher,
  },
  {
    path: "/admin/teacher/create",
    name: "teacherCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: TeacherCreate,
  },
  {
    path: "/admin/teacher/view/:id",
    name: "teacherView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: TeacherView,
  },
  {
    path: "/admin/teacher/edit/:id",
    name: "teacherEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: TeacherEdit,
  },
  {
    path: "/admin/teacher/materials",
    name: "teacherMaterials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: TeacherMaterials,
  },
  {
    path: "/admin/users",
    name: "users",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Users,
  },
  {
    path: "/admin/users/create",
    name: "usersCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: UsersCreate,
  },
  {
    path: "/admin/users/edit/:id",
    name: "usersEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: UsersEdit,
  },
  {
    path: "/admin/materials",
    name: "materials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Materials,
  },
  {
    path: "/admin/materials/create",
    name: "materialsCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: MaterialsCreate,
  },
  {
    path: "/admin/materials/edit/:id",
    name: "materialsEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: MaterialsEdit,
  },
  {
    path: "/admin/library",
    name: "library",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Library,
  },
  {
    path: "/admin/setting",
    name: "setting",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Setting,
  },
  {
    path: "/admin/logs",
    name: "logs",
    meta: {
      layout: DefaultLayout,
      auth: {
        roles: ["user", "admin", "superadmin"],
      },
    },
    component: Logs,
  },

  // Student pages
  {
    path: "/student/class",
    name: "studentClass",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: { roles: ["student"] },
    },
    component: StudentClass,
  },
  {
    path: "/student/materials",
    name: "studentMaterialsPage",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: { roles: ["student"] },
    },
    component: StudentMaterialsPage,
  },
  {
    path: "/student/library",
    name: "studentlibrary",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: { roles: ["student"] },
    },
    component: Studentlibrary,
  },

  // Teacher pages
  {
    path: "/teacher/class",
    name: "teacherClass",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: { roles: ["teacher"] },
    },
    component: TeacherClass,
  },
  {
    path: "/teacher/materials",
    name: "tacherMaterialsPage",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: { roles: ["teacher"] },
    },
    component: TeacherMaterialsPage,
  },
  {
    path: "/403",
    name: "403",
    meta: {
      layout: LoginLayout, // we add new meta layout here to use it later
    },
    component: page403,
  },
  {
    path: "*",
    name: "404",
    meta: {
      layout: LoginLayout, // we add new meta layout here to use it later
    },
    component: page404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const allowedRoles = to.meta?.auth?.roles;
  if (allowedRoles) {
    // Check if user is authenticated
    const userStore = useAppStore();
    const userInfo = userStore.userInfo;
    if (userInfo) {
      // Decode the JWT to get user data

      if (allowedRoles.includes(userInfo.role)) {
        // User has the required role
        next();
      } else {
        // User doesn't have the required role; redirect to home
        next("/403");
      }
    } else {
      // User is not authenticated; redirect to login
      next("/");
    }
  } else {
    // Allow access to routes without specified allowedRoles
    next();
  }
});

export default router;

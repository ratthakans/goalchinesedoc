import Vue from "vue";
import VueRouter from "vue-router";
import LoginLayout from "../layouts/login";
import DefaultLayout from "../layouts/default";

import Login from "../pages/login.vue";
import Dashboard from "../pages/admin/dashboard.vue";

import classesCalenday from "../pages/admin/classes/calendar.vue";
import classesAll from "../pages/admin/classes/all.vue";
import classesCreate from "../pages/admin/classes/create.vue";
import classesEdit from "../pages/admin/classes/edit.vue";
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
      auth: "admin",
    },
    component: Dashboard,
  },

  {
    path: "/admin/classes/calendar",
    name: "classesCalendar",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesCalenday,
  },
  {
    path: "/admin/classes/all",
    name: "classesAll",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesAll,
  },
  {
    path: "/admin/classes/create",
    name: "classesCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesCreate,
  },
  {
    path: "/admin/classes/edit/:id",
    name: "classesEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesEdit,
  },
  {
    path: "/admin/classes/view/:id",
    name: "classesView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesView,
  },
  {
    path: "/admin/classes/attendance",
    name: "classesAttendance",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: classesAttendance,
  },
  {
    path: "/admin/student/all",
    name: "student",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: Student,
  },
  {
    path: "/admin/student/create",
    name: "studentCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: StudentCreate,
  },
  {
    path: "/admin/student/view/:id",
    name: "studentView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: StudentView,
  },
  {
    path: "/admin/student/edit/:id",
    name: "studentEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: StudentEdit,
  },
  {
    path: "/admin/student/materials",
    name: "studentMaterials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: StudentMaterials,
  },
  {
    path: "/admin/teacher/all",
    name: "teacher",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
      auth: "admin",
    },
    component: Teacher,
  },
  {
    path: "/admin/teacher/create",
    name: "teacherCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: TeacherCreate,
  },
  {
    path: "/admin/teacher/view/:id",
    name: "teacherView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: TeacherView,
  },
  {
    path: "/admin/teacher/edit/:id",
    name: "teacherEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: TeacherEdit,
  },
  {
    path: "/admin/teacher/materials",
    name: "teacherMaterials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: TeacherMaterials,
  },
  {
    path: "/admin/users",
    name: "users",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Users,
  },
  {
    path: "/admin/users/create",
    name: "usersCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: UsersCreate,
  },
  {
    path: "/admin/users/edit/:id",
    name: "usersEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: UsersEdit,
  },
  {
    path: "/admin/materials",
    name: "materials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Materials,
  },
  {
    path: "/admin/materials/create",
    name: "materialsCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: MaterialsCreate,
  },
  {
    path: "/admin/materials/edit/:id",
    name: "materialsEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: MaterialsEdit,
  },
  {
    path: "/admin/library",
    name: "library",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Library,
  },
  {
    path: "/admin/setting",
    name: "setting",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Setting,
  },

  // Student pages
  {
    path: "/student/class",
    name: "studentClass",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentClass,
  },
  {
    path: "/student/materials",
    name: "studentMaterialsPage",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentMaterialsPage,
  },
  {
    path: "/student/library",
    name: "studentlibrary",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Studentlibrary,
  },

  // Teacher pages
  {
    path: "/teacher/class",
    name: "teacherClass",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: TeacherClass,
  },
  {
    path: "/teacher/materials",
    name: "tacherMaterialsPage",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
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

Vue.router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default Vue.router;

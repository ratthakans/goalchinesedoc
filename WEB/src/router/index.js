import Vue from "vue";
import VueRouter from "vue-router";
import LoginLayout from "../layouts/login";
import DefaultLayout from "../layouts/default";

import Login from "../pages/login.vue";
import Dashboard from "../pages/admin/dashboard.vue";

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
import Library from "../pages/admin/library.vue";
import Setting from "../pages/admin/setting.vue";

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
    },
    component: Dashboard,
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
    path: "/admin/student/all",
    name: "student",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: Student,
  },
  {
    path: "/admin/student/create",
    name: "studentCreate",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentCreate,
  },
  {
    path: "/admin/student/view/:id",
    name: "studentView",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentView,
  },
  {
    path: "/admin/student/edit/:id",
    name: "studentEdit",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentEdit,
  },
  {
    path: "/admin/student/materials",
    name: "studentMaterials",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
    },
    component: StudentMaterials,
  },
  {
    path: "/admin/teacher/all",
    name: "teacher",
    meta: {
      layout: DefaultLayout, // we add new meta layout here to use it later
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

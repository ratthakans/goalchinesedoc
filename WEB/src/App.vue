<template>
  <div id="app">
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {};
</script>

<style>
.swal2-popup {
  font-family: Roboto, sans-serif !important;
}
</style>

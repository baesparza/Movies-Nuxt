<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
    <br>
    <button type="button" class="btn" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty"
};
</script>
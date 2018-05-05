<template>
  <router-link :to="{ name: 'movie-id', params: { id: data.id }}" tag="div">
    <img v-if="data.poster_path" :src="'http://image.tmdb.org/t/p/w500' + data.poster_path">
    <h3 :title="data.title">{{ data.original_title }}</h3>
    <p v-if="data.overview">{{ data.overview }}</p>
    <span v-if="data.release_date">{{ data.release_date }}</span>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["data"]
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
p {
  text-align: justify;
}
</style>
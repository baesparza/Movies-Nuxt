<template>
<div class="container-fluid">
    <div class="card-container">
      <div v-if="movies.length == 0">
        No movies were found
      </div>
      <div v-for="(movie, index) in movies" :key="index">
        <Card v-bind:data = "movie" class="item"></Card>  
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card";
export default {
  components: {
    Card
  },
  asyncData({ params }) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${
          params.id
        }&sort_by=popularity.desc&api_key=1c644f63e63f2e9433d17372c9322ca1`
      )
      .then(res => {
        return { movies: res.data.results };
      });
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 5px;
  justify-content: center;
}
.img-responsive {
  max-width: 100%;
}
.item {
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  grid-row-end: span 6;
}
</style>
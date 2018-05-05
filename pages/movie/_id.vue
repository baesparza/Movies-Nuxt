<template>
    <div  class="container">
      <h1>{{ movie.title }}</h1>
      <div class="row">
        <div class="col-md-4">
          <img v-if="movie.poster_path" :src="'http://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.original_title">
        </div>
        <div class="col-md-8">
          <h3>Resume</h3>
          <hr>
          <p v-if="movie.overview">{{ movie.overview }}</p>
          <div v-if="movie.tagline">
            <h3>Tag Line</h3>
            <hr>
            <p>{{ movie.tagline }}</p>
          </div>
          <h5 v-if="movie.popularity">Popularity:  <span>{{ movie.popularity}}</span></h5>
          <h5 v-if="movie.vote_average">Average Vote:  <span>{{ movie.vote_average }}</span></h5>
          <div v-if="movie.production_companies" class="companies">
            <li v-for="(compani, index) in movie.production_companies" :key="index"  v-if="compani.logo_path">
              <img :title="compani.name" :src="'http://image.tmdb.org/t/p/w500' + compani.logo_path"/>
            </li>
          </div>
          <button type="button" class="btn" @click="$router.go(-1)">Back</button>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          params.id
        }?api_key=1c644f63e63f2e9433d17372c9322ca1`
      )
      .then(res => {
        return { movie: res.data };
      });
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.companies {
  display: flex;
  text-align: center;
  list-style: none;
  vertical-align: middle;
}
.companies > li {
  flex: 1;
}
@media all and (max-width: 600px) {
  .companies {
    flex-wrap: wrap;
  }
  .companies > li {
    flex-basis: 50%;
  }
}
@media all and (max-width: 400px) {
  .companies > li {
    flex-basis: 100%;
  }
}
</style>
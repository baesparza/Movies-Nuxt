<template>
    <div class="container-fluid">
        <div class="card-container">
            <div v-for="(movie, index) in movies" :key='index'>
                <router-link tag="div" :to="{ name: 'movie-id', params: { id: movie.id }}" :title="movie.title" class="item">
                    <img :src="'http://image.tmdb.org/t/p/w500' + movie.backdrop_path" class="img-responsive">
                    <h3>
                        {{ movie.original_title }}
                    </h3>
                    <span>{{ movie.release_date }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
  asyncData() {
    return axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=1c644f63e63f2e9433d17372c9322ca1"
      )
      .then(res => {
        return { movies: res.data.results };
      });
  }
};
</script>

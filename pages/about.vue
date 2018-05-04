<template>
    <div class="container">
        <h1>About me:</h1>
        <div class="row">
            <div class="col-md-4">
                <img :src="profile.avatar_url" alt="photo">
            </div>
            <div class="col-md-8">
                <h2>{{ profile.name }} - <a class="profile" :href="profile.html_url" target="_blank">{{ profile.login }}</a></h2>
                
                <p>{{ profile.bio }}</p>
                <p v-if="profile.email">{{ profile.email }}</p>
                <p v-if="profile.hireable">Looking for business</p>
                <p>{{ profile.location }}</p>
                <p>Repos: {{ profile.public_repos }} - Followers: {{ profile.followers }} - Following: {{ profile.following }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
  asyncData() {
    return axios.get(`https://api.github.com/users/baesparza`).then(res => {
      return { profile: res.data };
    });
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  border-radius: 5px;
}
</style>
<template>
  <div class="container-fluid">
    <ul>
      <li><router-link :to="{ name: 'index'}">Popular</router-link></li>
      <li><router-link :to="{ name: 'index-kids'}">Kids</router-link></li>
	  </ul>
    <nuxt-child/>
  </div>
</template>


<script>
export default {
  head () {
    return {
      title: "Movies-vue",
      meta: [
        { hid: 'description', name: 'description', content: 'Movies app, build with vue and nuxt' }
      ]
    }
  }
};
</script>


<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
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
}
</style>

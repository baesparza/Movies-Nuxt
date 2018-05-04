<template>
   <nav>
        <ul class="container">
            <li>
              <router-link :to="{ name: 'index'}">
                Home
              </router-link>
            </li>
            <li class="search">
              <input class="search-input" @keyup.enter="$router.push('/search/' + $event.target.value)" placeholder="Search movie">
            </li>
            <li>
              <router-link :to="{ name: 'about'}">
                About
              </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>


<style scoped>
nav {
  list-style: none;
}
nav > ul > li {
  display: inline;
}
nav > ul > li > a {
  text-decoration: none;
  margin-top: 5px;
  display: block;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.search-input {
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
}
.router-link-exact-active {
  font-weight: 700;
}
.container {
  display: flex;
  text-align: center;
}
.search {
  flex: 1;
}
.container > li {
  flex: 1;
}
@media all and (max-width: 600px) {
  .container {
    flex-wrap: wrap;
  }
  .container > li {
    flex-basis: 50%;
  }
}
@media all and (max-width: 400px) {
  .container > li {
    flex-basis: 100%;
  }
  .search {
    order: 1;
  }
}
</style>

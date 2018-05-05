<template>
	<nav class="navbar">
		<ul>
      <li><router-link :to="{ name: 'index'}">Home</router-link></li>
      <li><router-link :to="{ name: 'about'}">About</router-link></li>
      <li>
        <input @keyup.enter="$router.push('/search/' + $event.target.value)" placeholder="Search movie">
      </li>
	  </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background: linear-gradient(to right, #b06ab3, #4568dc);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
  margin: 0px;
}
.navbar > ul {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.navbar > ul li {
  display: inline-block;
}
.navbar > ul li a {
  text-decoration: none;
  color: #fff;
  width: 120px;
  display: inline-block;
  text-align: center;
  padding: 20px 0;
  font-weight: bold;
  position: relative;
}
.navbar > ul li a::before {
  background: #fff none repeat scroll 0 0;
  bottom: -2px;
  height: 3px;
  content: "";
  left: 0;
  position: absolute;
  width: 0%;
  transition: 0.5s;
}
.navbar > ul li a:hover::before {
  width: 100%;
}
input{
  padding: 0px 6px;
}
</style>

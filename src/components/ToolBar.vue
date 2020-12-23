<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  padding: 8px;
  background: #42b883;
  color: #fff;
}
.header a {
  margin-right: 8px;
  color: #fff;
  opacity: 0.8;
  text-decoration: none;
}
.header a:hover {
  opacity: 1;
}
.header .router-link-exact-active {
  opacity: 1;
  text-decoration: underline;
}
</style>

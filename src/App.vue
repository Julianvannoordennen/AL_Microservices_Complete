<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <div id="nav">
      <router-link to="/products">Products</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/reviews">Reviews</router-link>
    </div>
    <h3>{{ $router.currentRoute.name }}
    </h3>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push({
      path: '/products',
    });
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.image-default-size {
  max-width: 250px;
  max-height: 250px;
}

.awesome-hr {
  width: 90%;
}

.card-title {
  font-weight: bold;
}

.card {
  float: left;
  margin: 25px;
}

.button-align-fix .btn .b-icon {
  vertical-align: middle;
}
</style>

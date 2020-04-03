<template>
  <div class="products">
    <hr class="awesome-hr" />
    <product-list></product-list>
    <hr class="awesome-hr" />
  </div>
</template>

<script>
import ProductList from './ProductList';
export default {
  name: 'Products',
  components: {
    'product-list': ProductList,
  },
};
</script>
